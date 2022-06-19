const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector(".todo-write");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //비어있는 toDos 배열

function saveToDos() {
  //localStorage.setItem() : localStorage에 내용을 넣되, localStorage에는 배열은 넣을 수 없고 텍스트만 저장할 수 있다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify = Javascript 코드를 string으로 바꿔줌
}

function deleteToDo(event) {
  //X button을 클릭할 때, event를 얻게 되는데 그 event가 target(클릭된 것)을 준다.
  const li = event.target.parentElement; //event가 발생한 target = button, parentElement는 클릭된 element의 부모
  li.remove(); //삭제하고 싶은 li
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //클릭했던 li의 id를 갖고 있는 toDo를 지우기 = 클릭한 li.id와 다른 toDo는 남겨두기
  saveToDos(); //toDos DB에서 toDo를 지운 뒤에, saveToDos를 한 번 더 불러야 함!
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  //방금 발생한 event를 handleToDoSubmit 함수의 첫번째 인자로 준다!
  event.preventDefault(); //새로고침시 기본 동작(없어지는 것)을 방지하기 위함.
  const newTodo = toDoInput.value; //새로운 변수에 작성 값 저장하기
  toDoInput.value = ""; //submit 하면 기존 작성 값 비우기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //newTodo가 그려질 때마다 그 텍스트를 array(toDos)에 push
  paintToDo(newTodoObj); //추가한 항목을 li, span으로 추가하기 (screen에 Paint)
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //localStorage에 저장된 항목

if (savedToDos !== null) {
  //localStorage에 저장된 항목이 있다면(array 형으로 변형하기)
  const parsedToDos = JSON.parse(savedToDos); //parsedToDos의 item을 오른쪽 함수에 실행
  toDos = parsedToDos; //toDos 배열이 새로고침하면 비어있는 배열로 되는 것을 방지하고, localStorage에 저장된 내용을 그대로 복원하는 배열로 대체함
  parsedToDos.forEach(paintToDo); //array에서의 forEach란, array에 있는 각각의 item에 대해 function을 실행하도록 함
}
