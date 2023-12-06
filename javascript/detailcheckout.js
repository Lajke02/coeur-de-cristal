//The following 7 lines of codes was adapted by Blackbox AI Accessed 2023-12-04
function showPopup() {
  document.querySelector(".popupmodal").style.display = "block";
}
function hidePopup(event) {
  if (event.target === document.querySelector(".popupmodal")) {
    document.querySelector(".popupmodal").style.display = "none";
  }
}
