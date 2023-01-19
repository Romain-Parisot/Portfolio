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

// --------------------animation js------------------------
let ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold : ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        entry.target.classList.remove('reveal')
        observer.unobserve(entry.target)
    }
    })
}


const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r)
})

