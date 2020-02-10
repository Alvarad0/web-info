AOS.init()

//Nav
let posStart = window.pageYOffset
window.addEventListener("scroll", function () {
    let scroll = window.pageYOffset,
        tag = document.getElementsByTagName("nav")[0]
    tag.style.top = posStart >= scroll ? "0px" : "-100px"
    posStart = scroll
})

//Menu
let links = document.querySelectorAll(".enlaces-header")[0]
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () {
    links.classList.toggle("menudos")
})
