const btnAnimate = document.getElementById("addtobagbutton");
const shoppingbag = document.getElementById("shoppers");

btnAnimate.addEventListener("click", () => {
  shoppingbag.classList.toggle("ani");
});
