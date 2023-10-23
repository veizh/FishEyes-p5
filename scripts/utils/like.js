export function totalLikes(){
  let total =0

  document.querySelectorAll('.number').forEach(e=>{
    total+=Number(e.textContent)
  })
  document.querySelector(".total_like").innerHTML=total
}
