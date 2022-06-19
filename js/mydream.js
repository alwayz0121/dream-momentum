const dreamForm = document.getElementById("dream-form");
const dreamInput = document.querySelector(".dream-note");
const dreamList = document.getElementById("dream-list");

const DREAM_KEY = "dream";

let dreamNote = [];

function saveDreams() {
  localStorage.setItem(DREAM_KEY, JSON.stringify(dreamNote));
}

function deleteDreams(event) {
  const li = event.target.parentElement;
  li.remove();
  dreamNote = dreamNote.filter((dream) => dream.id !== parseInt(li.id));
  saveDreams();
}

function paintDreams(newDream) {
  const li = document.createElement("li");
  li.id = newDream.id;
  const span = document.createElement("span");
  span.innerText = newDream.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteDreams);
  li.appendChild(span);
  li.appendChild(button);
  dreamList.appendChild(li);
}

function handleDreamSubmit(event) {
  event.preventDefault();
  const newDream = dreamInput.value;
  dreamInput.value = "";
  const newDreamObj = {
    text: newDream,
    id: Date.now(),
  };
  dreamNote.push(newDreamObj);
  paintDreams(newDreamObj);
  saveDreams();
}

dreamForm.addEventListener("submit", handleDreamSubmit);

const savedDreams = localStorage.getItem(DREAM_KEY);

if (savedDreams !== null) {
  const parsedDreams = JSON.parse(savedDreams);
  dreamNote = parsedDreams;
  parsedDreams.forEach(paintDreams);
}
