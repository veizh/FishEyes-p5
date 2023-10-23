import { caroussel } from "../class/caroussel.js";
import { displayGallery } from "../templates/displayGallery.js";
import { getMediaById } from "../utils/getMediaById.js";
import { getPhotographerId } from "../utils/getPhotograph.js";
import { totalLikes } from "../utils/like.js";
import { sortArray } from "../utils/sortArray.js";
import createHeader from "./headerPhotographer.js";


export let dataPhotograph = await getPhotographerId()
export let media  = await getMediaById(dataPhotograph.id)




async function init(){
    document.querySelector('.tarif').innerHTML=dataPhotograph.price+ "€ / jour"
    createHeader(dataPhotograph)
    displayGallery(media,dataPhotograph)
    totalLikes()
}



init()