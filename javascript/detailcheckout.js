const openPopupButton = document.getElementById("addtobagbutton");
const closePopupButton = document.getElementById("checkoutbutton");
const overlay = document.getElementById("overlay");
const popupmodal = document.getElementById("popupmodal");

openPopupButton.addEventListener("click", () => {
  openPopup();
});

closePopupButton.addEventListener("click", () => {
  closePopup();
});

overlay.addEventListener("click", () => {
  closePopup();
});

function openPopup() {
  popupmodal.classList.add("active");
  overlay.classList.add("active");
}

function closePopup() {
  popupmodal.classList.remove("active");
  overlay.classList.remove("active");
}
