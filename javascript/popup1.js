document.addEventListener("DOMContentLoaded", function () {
  const purchaseButton = document.querySelector(".purchasebtn");
  const modal = document.querySelector(".modal");

  purchaseButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
