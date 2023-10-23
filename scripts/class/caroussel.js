import { enabledMainAria } from "../utils/navKeyboard.js"
import { image,video } from "./media.js"

export class caroussel {
    constructor(media){
        this.media = media
        this.active=null
        this.array
        this.title=document.querySelector('.title-caroussel')
    }
    setActive(x){
        this.active=x
        this.init()
    }

    createCaroussel(){
        
        let array=[]
        this.media.forEach((e,i)=>{
            if(e.image){
                let tmp = new image(e.id,e.title,e.photographerId,e.image,i===this.active?true:false)
                tmp.init()
                array.push(tmp)
            }
            if(e.video){
                let tmp = new video(e.id,e.title,e.photographerId,e.video,i===this.active?true:false)
                tmp.init()
                array.push(tmp)
              }
        })
        
        this.array=array

    }
    controlCaroussel(){
        document.querySelector('.gauche').addEventListener('click',()=>{
            this.nav("previous")
        })
        document.querySelector('.droite').addEventListener('click',()=>{
            this.nav("next")

    })
}   
    close(){
        document.querySelector('.caroussel').style.display="none"
        this.resetCarousel()
        enabledMainAria()
    }
   
    nav(action){
        let current = null
        this.array.forEach((e,i)=>{
            if(e.element.classList.contains("visible")){
                current = i
            }
        })
        if(action==="previous"){
            if(current!==0 && current!==null){

                this.array[current].element.classList.remove('visible')
                this.array[current-1].element.classList.add('visible')
                this.title.innerHTML=this.array[current-1].title

            }
            else{
                this.array[current].element.classList.remove('visible')
                this.array[this.array.length-1].element.classList.add('visible')
                this.title.innerHTML=this.array[this.array.length-1].title
            }
        }
        if(action==="next"){
            if(current!==this.array.length-1 && current!==null){

                this.array[current].element.classList.remove('visible')
                this.array[current+1].element.classList.add('visible')
                this.title.innerHTML=this.array[current+1].title

            }
            else{
                this.array[current].element.classList.remove('visible')
                this.array[0].element.classList.add('visible')
                this.title.innerHTML=this.array[0].title
            }
        }
        document.querySelector('.visible').focus()
    }
    open(){
        let caroussel = document.querySelector('.caroussel')
        caroussel.style.display="flex"
        caroussel.setAttribute("tabindex",0)
        document.addEventListener("keyup",(e)=>{
            console.log(e);
            if(e.key==="ArrowRight"){
                this.nav("next")
            }
            if(e.key==="ArrowLeft"){
                this.nav("previous")
            }
            if(e.key==='Escape'){
                this.close()
            }
        })
        document.querySelector('.closeCaroussel').addEventListener('click',()=>{
            this.close()
        })

    }
    resetCarousel(){
        let items = document.querySelectorAll('.item')
        items.forEach(e=>e.remove())
    }
    init(){
        this.resetCarousel()
        this.open()
        this.createCaroussel()
        this.controlCaroussel()
    }
}