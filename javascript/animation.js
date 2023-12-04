const openPopupButton = document.getElementById("addtobagbutton");
const shoppingbag = document.getElementById("shoppers");

openPopupButton.addEventListener("click", () => {
  shoppingbag.classList.toggle("ani");
});
