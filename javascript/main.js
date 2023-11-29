// footer java script:
// the following 6 lines of code was adapted from ChatGPT accessed 2023-11-28:
const rows = document.querySelectorAll(".finfo .row");

rows.forEach((row) => {
  row.addEventListener("click", () => {
    row.classList.toggle("active");
  });
});

// specified styling, when you click on a row, the corresponding panel will expand or collapse. The active row will have the "active" class applied to it, which will make its panel visible:
