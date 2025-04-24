const bClose = document.querySelector(".close");
const sidebar = document.querySelector("#sidebar");

bClose.addEventListener("click", () => {
  sidebar.classList.toggle("on")
})