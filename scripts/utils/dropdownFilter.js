function dropdownController() {
  let button = document.querySelector(".order-btn span");
  let options = document.querySelectorAll(".method");
  let list = document.querySelector(".option")
  let dropdown = document.querySelector(".dropdown")
  dropdown.addEventListener("mouseover", () => {
    list.classList.add('active')
    options.forEach((element) => {
      if (button.textContent === element.textContent) {
        element.classList.remove('active')
      }
      else{
        element.classList.add('active')

      }
    });
    dropdown.addEventListener('mouseleave',()=>{
        list.classList.remove('active')
    })
    newMethod(options,button,list)
  });
  dropdown.addEventListener('keyup',(e)=>{
    if(e.key==="Enter"){
      console.log("éokok");
      list.classList.add('active')
      options.forEach((element) => {
        if (button.textContent === element.textContent) {
          element.setAttribute('tabindex',-1)
          element.classList.remove('active')
        }
        else{
          element.classList.add('active')
          element.setAttribute('tabindex',0)
  
        }})
    newMethod(options,button,list)

    }
  })
}

function newMethod(options,button,list){
    options.forEach(e=>{
        e.addEventListener('click',()=>{
            list.classList.remove('active')
            button.textContent = e.textContent
        })
        e.addEventListener('keyup',e=>{
          if(e.key==="Enter"){
            list.classList.remove('active')
            button.textContent = e.target.textContent
          }
        })
    })
}
dropdownController();
