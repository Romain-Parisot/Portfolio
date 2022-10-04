// --------------------------------------burger menu ------------------------------
function toggleburger(){
    let header=document.querySelector('.header')
    let burger=document.querySelector('.burger')
    burger.addEventListener('click', ()=>{
        header.classList.toggle('none');
    })
}
toggleburger();
