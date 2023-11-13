//참고 : https://codepen.io/letsBeCodeGenius/pen/PobQRXy
// https://velog.io/@grinding_hannah/JavaScript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%BA%90%EB%9F%AC%EC%85%80Carousel-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

const container = document.querySelector(".carousel-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

(function addEvent() {
  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
})();

function translateContainer(direction) {
  const selectedBtn = (direction === 1) ? 'prev' : 'next';
  container.ontransitionend = () => reorganizeEl(selectedBtn);
  container.style.transitionDuration = '500ms';
  // container.style.transform = `translateX(${direction * (100 / container.childElementCount)}%)`;
  container.style.transform = `translateX(${direction * ((container.firstElementChild.offsetWidth + 40) / container.offsetWidth * 100)}%)`;
  console.log(container.offsetWidth);
  console.log(container.firstElementChild.offsetWidth);
}

function reorganizeEl(selectedBtn) {
  container.removeAttribute('style');
  if (selectedBtn === 'prev')
    container.insertBefore(container.lastElementChild, container.firstElementChild);
  else
    container.appendChild(container.firstElementChild);
}
