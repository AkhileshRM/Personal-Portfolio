let ham = document.querySelector(".hamburger")
let hamburger = true
let nav = document.querySelector(".mobile-container")
let header = document.querySelector(".header")
let names = document.querySelector(".name")

ham.addEventListener("click", () => {
    if(hamburger === true){
        hamburger = false
        ham.classList.add("close")
        ham.classList.remove("hamburger")
        nav.style.display="block";
        header.style.flexDirection="column";
        names.style.width="50%";
        ham.style.position="absolute"
        ham.style.top="8%"
        ham.style.right="5%"

    }
    else{
        hamburger = true
        ham.classList.add("hamburger")
        ham.classList.remove("close")
        nav.style.display="none";
    }
    console.log(hamburger)
})

