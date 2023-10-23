import { displayGallery } from "../templates/displayGallery.js";
import { dataPhotograph,media } from "../pages/photographer.js";

let optionsOrder = document.querySelectorAll(".method")
optionsOrder.forEach(e=>{
    e.addEventListener('click',()=>{
        sortArray(media,e.textContent)
       
    })
    e.addEventListener('keyup',(el)=>{
      if(el.key==="Enter"){
        sortArray(media,e.textContent)
        console.log(document.querySelector('.option'));
        
      }
    })
})
export function sortArray(medias,method){
    let sortedArray = [];
    if (method === "Titre") {
      sortedArray = medias.sort(function compare(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
      displayGallery(sortedArray,dataPhotograph)
    }
    if (method === "Popularité") {
      sortedArray = medias.sort(function compare(a, b) {
        if (Number(a.likes) > Number(b.likes)) return -1;
        if (Number(a.likes) < Number(b.likes)) return 1;
        return 0;
      });
      displayGallery(sortedArray,dataPhotograph)
    }
    if (method === "Date") {
      sortedArray = medias.sort(function compare(a, b) {
        if (
          Number(a.date.replaceAll("-", "")) < Number(b.date.replaceAll("-", ""))
        )
          return -1;
        if (
          Number(a.date.replaceAll("-", "")) > Number(b.date.replaceAll("-", ""))
        )
          return 1;
        return 0;
      });
      displayGallery(sortedArray,dataPhotograph)
    }
}