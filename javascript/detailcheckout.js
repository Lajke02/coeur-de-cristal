function showPopup() {
  document.querySelector(".popupmodal").style.display = "block";
}
function hidePopup(event) {
  if (event.target === document.querySelector(".popupmodal")) {
    document.querySelector(".popupmodal").style.display = "none";
  }
}
