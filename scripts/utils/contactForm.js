import { enabledMainAria,disabledMainAria } from "./navKeyboard.js";
let buttonOpen = document.querySelector('.modal_opening ')
let buttonClose = document.querySelector('.close_btn')
console.log(buttonOpen);
buttonOpen.addEventListener('click',()=>{
    console.log("test");
    displayModal()
})
buttonClose.addEventListener('click',()=>{
    console.log("test");
    closeModal()
})
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    disabledMainAria()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    enabledMainAria()
}
