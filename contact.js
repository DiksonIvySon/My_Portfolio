//function to toggle to contact pop up
let popUp_container = document.getElementById("container");
let popUp_overlay_container = document.getElementById("overlayCon");
let popUp_overlayBTN = document.querySelector(".overlayBtn");

popUp_overlayBTN.addEventListener('click', ()=> {
  popUp_container.classList.toggle('right-panel-active');
})