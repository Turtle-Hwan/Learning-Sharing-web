const typing_element = document.querySelector("#intro-content .type-content")
const intro_content = "Even if it's slow, keep going like a turtle.";

let idx = 0;
function typing() {

  typing_element.innerHTML += intro_content[idx];
  idx += 1;
  if (idx >= intro_content.length) {
    // typing_element.innerHTML = "";
    // idx = 0;
    clearInterval(interval);
  }
}

let interval = setInterval(typing, 100);

//참고 : https://velog.io/@somangoi/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B06-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%83%80%EC%9D%B4%ED%95%91-%ED%9A%A8%EA%B3%BC

