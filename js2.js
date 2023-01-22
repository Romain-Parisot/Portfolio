// ----------------------------------Dark Mode-------------------------------

// recupere l'image et son src
let imgdarkmode=document.querySelector('#imglune')
let srcdarkmode=imgdarkmode.getAttribute("src")

let imglogogit=document.querySelector('#img_logo_git')
let srclogogit=imglogogit.getAttribute("src")

let imglogomail=document.querySelector('#img_logo_mail')
let srclogomail=imglogomail.getAttribute("src")

let imglogolink=document.querySelector('#img_logo_linkedin')
let srclogolink=imglogolink.getAttribute("src")

let imgfleche=document.querySelector('.flecheblc')
let srcfleche=imgfleche.getAttribute("src")

let bodybc=document.querySelector('body')
let pall=document.querySelectorAll("p")
let h1=document.querySelector('h1')
let h2=document.querySelectorAll("h2")
let h3=document.querySelectorAll("h3")
let strong=document.querySelectorAll("strong")





function DarkMode(){
    if(srclogogit=="images/git_version_blanche_2.png"){
        srclogogit="images/git_version_noire_2.png"
        imglogogit.setAttribute('src', srclogogit)
        
    }
    else{
        srclogogit="images/git_version_blanche_2.png"
        imglogogit.setAttribute('src', srclogogit)
    }

    if(srclogomail=="images/mail_version_blanche.png"){
        srclogomail="images/mail_version_noire.png"
        imglogomail.setAttribute('src', srclogomail)
        
    }
    else{
        srclogomail="images/mail_version_blanche.png"
        imglogomail.setAttribute('src', srclogomail)
    }

    if(srclogolink=="images/linkedin_version_blanche.png"){
        srclogolink="images/linkedin_version_noire.png"
        imglogolink.setAttribute('src', srclogolink)
        
    }
    else{
        srclogolink="images/linkedin_version_blanche.png"
        imglogolink.setAttribute('src', srclogolink)
    }

    if(srcdarkmode=="images/lune_blanc.png"){
        srcdarkmode="images/lune_noir.png"
        imgdarkmode.setAttribute('src', srcdarkmode)
        
    }
    else{
        srcdarkmode="images/lune_blanc.png"
        imgdarkmode.setAttribute('src', srcdarkmode)
    }

    if(srcfleche=="images/fleche_blanche.png"){
        srcfleche="images/fleche_noire.png"
        imgfleche.setAttribute('src', srcfleche)
        
    }
    else{
        srcfleche="images/fleche_blanche.png"
        imgfleche.setAttribute('src', srcfleche)
    }
    
    pall.forEach(function(p){
        p.classList.toggle('black');
    })
    h2.forEach(function(h){
        h.classList.toggle('black');
    })
    h3.forEach(function(h){
        h.classList.toggle('black');
    })
    strong.forEach(function(s){
        s.classList.toggle('black');
    })
    bodybc.classList.toggle('bodybc');
    h1.classList.toggle('black')

}
imgdarkmode.addEventListener('click',DarkMode)       
