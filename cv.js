let body = document.querySelector("body")
let cpressed = false
let printCV = false
let stage = document.querySelector(".stage")
let alternance = document.querySelector(".alternance")
let btstage = document.querySelector(".btstage")
let btalternance = document.querySelector(".btalternance")

if (printCV == false) {
    body.addEventListener ('keydown', (event) => {
        console.log(event['key']);
        if(event['key'] == "c"){
            cpressed = true
        }
        if (event['key'] == "v" && cpressed) {
            btalternance.classList.toggle("none")
            btstage.classList.toggle("none")
        }
    });
}




