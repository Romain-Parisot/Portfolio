// --------------------------------------burger menu ------------------------------
function toggleburger(){
    let header=document.querySelector('.header')
    let burger=document.querySelector('.burger')
    let barUp=document.querySelector('.bar_up')
    let barDown=document.querySelector('.bar_down')
    let barMid=document.querySelector('.bar_mid')
    burger.addEventListener('click', ()=>{
        barMid.classList.toggle('none');
        barUp.classList.toggle('barAnimationTop');
        barDown.classList.toggle('barAnimationBot');
        header.classList.toggle('animationHeader');

    })
}
toggleburger();

// ----------------------------------Dark Mode-------------------------------

// recupere l'image et son src
let imgdarkmode=document.querySelector('#imglune')
let srcdarkmode=imgdarkmode.getAttribute("src")


function DarkMode(){
    if(srcdarkmode=="images/lune_blanc.png"){
        srcdarkmode="images/lune_noir.png"
        imgdarkmode.setAttribute('src', srcdarkmode)
    }
    else{
        srcdarkmode="images/lune_blanc.png"
        imgdarkmode.setAttribute('src', srcdarkmode)
    }

}
imgdarkmode.addEventListener('click',DarkMode)       

// --------------------couper bg------------------------