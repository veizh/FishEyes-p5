
import { card } from "../class/card.js";
export function displayGallery(medias) {


  var list = document.querySelectorAll("article");

  list.forEach((e) => {
    e.remove();
  });
 
  medias.forEach((data,index)=>{
    let tmp = new card(data,medias)
    tmp.displayCard(index)
  })

}
