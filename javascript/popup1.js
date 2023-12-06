// The following 7 lines was adapted by Blackbox AI Accessed 2023-11-29
function showModal() {
  document.querySelector(".modal").style.display = "block";
}
function hideModal(event) {
  if (event.target === document.querySelector(".modal")) {
    document.querySelector(".modal").style.display = "none";
  }
}

//onclick attribute on the purchase button calls the showModal function. The function selects the pop up element using document.querySelector and sets it to display style to block.

//on click attribute on the popup calls the hidemModal function when clicked. hides the modal by setting display to none. The event object is passed to the hideModal function  to provide info about the click event
