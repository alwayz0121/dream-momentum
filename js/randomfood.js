const menus = [
  "νμπ",
  "μμπ",
  "μ€μπ",
  "μΌμπ£",
  "λΉ΅π₯ͺ",
  "λ°₯π",
  "λ©΄π",
  "κ³ κΈ°π",
];
const menuBtn = document.querySelector(".randomMenu__btn");
const rendomMenu = document.querySelector(".randomMenu__txt");

function showMenu() {
  const todaysMenu = menus[Math.floor(Math.random() * menus.length)];

  rendomMenu.innerHTML = todaysMenu;
}

menuBtn.addEventListener("click", showMenu);
