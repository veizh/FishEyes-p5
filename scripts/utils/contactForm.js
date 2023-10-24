import { enabledMainAria,disabledMainAria } from "./navKeyboard.js";
let buttonOpen = document.querySelector('.modal_opening ')
let btn = document.querySelector('.contact_button_submit')

let buttonClose = document.querySelector('.close_btn')


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let inputs = document.querySelectorAll('input')
    inputs.forEach(e=>console.log(e.name,"=>",e.value))

}
    
    )
buttonOpen.addEventListener('click',()=>{
    displayModal()
})
buttonClose.addEventListener('click',()=>{
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
