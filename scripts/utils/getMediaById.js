import { getData } from "./getPhotograph.js";

export async function getMediaById(id){
    let data =await getData()
    let media = []
    data.media.forEach(element => {
        if(element.photographerId===id){
            media.push( element)
        }
    });
    return media
}