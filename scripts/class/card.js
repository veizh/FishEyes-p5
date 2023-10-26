import { heart } from "../../assets/icons/heart.js"
import { totalLikes } from "../utils/like.js"
import { disabledMainAria } from "../utils/navKeyboard.js"
import { caroussel } from "./caroussel.js"


export class card {
    constructor (dataCard,medias) {
        this.medias = medias
        this.id = dataCard.photographerId
        this.dataCard = dataCard
        this.path = dataCard.image ? dataCard.image : dataCard.video
        this.idCard = dataCard.id
        this.title = dataCard.title
        this.likes = dataCard.likes
        this.media = this.createMedia()
        this.heartBtn = this.createBtn()
        this.likeCount = this.likeCount()
        this.article = this.createCard()
 
    }
    createMedia () {
        let media
        if (this.dataCard.image) {
             media = document.createElement('img')
            media.setAttribute("src", `assets/Sample_Photos/${this.id}/${this.path}`)
            media.setAttribute("alt", this.title)
            media.classList.add('photo')
           
    
        } else if (this.dataCard.video) {
             media = document.createElement('video');
            media.setAttribute("src", `assets/Sample_Photos/${this.id}/${this.path}`);
            media.setAttribute("alt", this.title);
            media.classList.add('photo')
        }
        media.setAttribute('tabindex',0)
        media.setAttribute('data-aria',"main")
        return media
    }
    keyboardNav(index){
        this.media.addEventListener('keyup',(e)=>{
            console.log(e.key);
            if(e.key==="Enter"){
                let carou = new caroussel(this.medias)
            carou.setActive(index)
            disabledMainAria()
            }
            
        })
    }
    likeCount () {
        const cardLike = document.createElement('p')
        cardLike.classList.add('number')
        cardLike.textContent = this.likes

        return cardLike
    }

    createBtn(){
        let btn = document.createElement('button')
        btn.classList.add('btnlike')
        btn.setAttribute('data-aria',"main")
        btn.setAttribute('aria-label',"Ajouter ou retirer son like")
        btn.setAttribute('tabindex',0)
        btn.innerHTML=heart
        
        return btn
    }

    createCard () {        
        const galleryCard = document.createElement('article')
        galleryCard.setAttribute("id", this.idCard)
        galleryCard.classList.add('galleryCard')
                    
        
         galleryCard.appendChild(this.media)
        const titleAndLike = document.createElement('div')
        titleAndLike.classList.add('container-flex')
        galleryCard.appendChild(titleAndLike)
            
        const cardTitle = document.createElement('h2')
        cardTitle.classList.add('title')
        cardTitle.textContent = this.title
        titleAndLike.appendChild(cardTitle)
    
        const likeAndHeart = document.createElement('div')
        likeAndHeart.classList.add('heart')
        titleAndLike.appendChild(likeAndHeart)
    

        likeAndHeart.appendChild(this.likeCount);
        likeAndHeart.appendChild(this.heartBtn);

        
        return galleryCard

        }

    displayCard (index) {
        this.media.addEventListener('click',()=>{
            let carou = new caroussel(this.medias)
            carou.setActive(index)
        })
        this.keyboardNav(index)
        this.media.addEventListener('mouseover',()=>{
            this.media.classList.add('hovered')
        })
        const gallery = document.querySelector('.container-articles')
        gallery.appendChild(this.article)
        this.updateLike()
    }
    updateLike () {
        this.heartBtn.addEventListener('click', ()  => {
            if (this.heartBtn.classList.contains('liked')) {
                this.likes--;
                this.likeCount.textContent = this.likes;
                this.heartBtn.classList.remove('liked');
            } else {
                this.likes++;
                this.likeCount.textContent = this.likes;
                this.heartBtn.classList.add('liked');
            }
            totalLikes()
        })
    }
}