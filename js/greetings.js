const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const retryBtn = document.querySelector("#retry");

const HIDDEN_CLASSNAME = "hidden"; //안 보이도록 만들기 : css의 .hidden과 연결
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //어떤 event의 기본 행동이든지 발생하지 않도록 막기 (브라우저가 submit 할 때 원래 하는 동작을 안 하도록 함)
  loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 숨기기 (form에 hidden이라는 class 추가하기)
  const username = loginInput.value; //loginInput 값을 변수에 저장
  localStorage.setItem(USERNAME_KEY, username); //유저가 이름을 작성할 때 저장하기
  paintGreetings(username); //loginInput으로부터 받은 값 username 이라는 인자를 가짐
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username} ! I support your dreams !`; //비어있는 h1요소에 Hello ${username} 추가
  greeting.classList.remove(HIDDEN_CLASSNAME); //hidden class명 지워주기
  retryBtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //유저정보가 local storage에 없다면
  loginForm.classList.remove(HIDDEN_CLASSNAME); //show the form
  loginForm.addEventListener("submit", onLoginSubmit); //submit은 엔터키를 누르거나 버튼을 클릭할 때 발생함
} else {
  paintGreetings(savedUsername); //local storage로부터 받은 값 savedUsername 인자 가짐
}

function retry(event) {
  event.preventDefault(); //어떤 event의 기본 행동이든지 발생하지 않도록 막기 (브라우저가 submit 할 때 원래 하는 동작을 안 하도록 함)
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  retryBtn.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = "";
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}
retryBtn.addEventListener("click", retry);
