export function disabledMainAria(){
    let mainAria = document.querySelectorAll('[data-aria="main"]')
    mainAria.forEach(e=>{ 
        e.setAttribute('tabindex',-1)
    })
    let closeBtn = document.querySelector('.close-modal')

}
export function enabledMainAria(){
    let mainAria = document.querySelectorAll('[data-aria="main"]')
    mainAria.forEach(e=>{ 
        e.setAttribute('tabindex',0)
    })
}