const clock = document.querySelector("h2#clock"); //#id input = 해당 id(안)에 있는 input을 가리킴, h2#id = h2태그 중 해당 ID를 가리킴

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //함수 호출 즉시의 시간을 부르고
setInterval(getClock, 1000); //1초마다 반복됨

