const menus = [
  "한식🍙",
  "양식🍕",
  "중식🍜",
  "일식🍣",
  "빵🥪",
  "밥🍚",
  "면🍜",
  "고기🍖",
];
const menuBtn = document.querySelector(".randomMenu__btn");
const rendomMenu = document.querySelector(".randomMenu__txt");

function showMenu() {
  const todaysMenu = menus[Math.floor(Math.random() * menus.length)];

  rendomMenu.innerHTML = todaysMenu;
}

menuBtn.addEventListener("click", showMenu);
