const popup = document.querySelector("pop-up");
const orderbtn = document.getElementById("orderbtn");

function show() {
  popup.classList.add("opened-popup");
}

orderbtn.addEventListener("click", () => {
  popup.classList.remove("opened-popup");
});

<div class="container">
  <button id="btn" type="Purchase" onclick="show()">
    Show Pop-up
  </button>
  <div class="pop-up">
    <h2>Yay! Your order is confirmed.</h2>
    <p>
      Coeur de Cristal will start working on this right away. We’ll email you as
      soon as it dispatches.
    </p>
    <button id="orderbtn" onclick="close()">
      View your order
    </button>
    <p>
      *Dispatch and delivery times are subject to change. If you’re experiencing
      difficulty with this order, please contact the seller. See more info.
    </p>
  </div>
</div>;


/* View your order Pop-up */
.pop-up {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.1);
    visibility: hidden;
    text-align: center;
    padding: 70px 70px;
    color: darkgreen;
    transition: transform 0.5s all ease;
  }
  
  .opened-popup {
    transform: translate(-50%, -50%) scale(1);
    visibility: visible;
    opacity: 1;
    top: 50%;
    transition: transform 0.5s all ease;
  }