export class image{
    constructor(id,title,photographerId,acces,bl){
        this.id= id
        this.title= title
        this.acces= acces
        this.photographerId= photographerId
        this.visibility = bl
        this.element = this.createContainer()
    }

    createContainer(){
        let image = document.createElement('img')
        image.setAttribute("src",`assets/Sample_Photos/${this.photographerId}/${this.acces}`)
        image.setAttribute('alt',this.title)
        image.setAttribute("tabindex",0)

    if(this.visibility){
        image.classList.add('visible')
    }
        image.dataset.id=this.id
        image.dataset.title=this.title
        image.classList.add("item")
        return image
    }
    init(){
        document.querySelector('.gauche').insertAdjacentElement("afterend",this.element)
        if(this.visibility){
            document.querySelector('.title-caroussel').innerHTML=this.title
        }
    }
}
export class video{
    constructor(id,title,photographerId,acces,bl){
        this.id= id
        this.title= title
        this.acces= acces
        this.photographerId= photographerId
        this.visibility=bl
        this.element = this.createContainer()
    }

    createContainer(){
        let video = document.createElement('video')
        let source = document.createElement('source')
        source.setAttribute("src",`assets/Sample_Photos/${this.photographerId}/${this.acces}`)
        video.appendChild(source)
        video.setAttribute('controls',true)
        if(this.visibility){
            video.classList.add('visible')
        }
        video.setAttribute('alt',this.title)
        video.setAttribute("tabindex",0)
        video.dataset.id=this.id
        video.dataset.title=this.title
        video.classList.add("item")
        
        return video
    }
    init(){
        document.querySelector('.gauche').insertAdjacentElement("afterend",this.element)
        if(this.visibility){
            document.querySelector('.title-caroussel').innerHTML=this.title
        }
    
    }
}

