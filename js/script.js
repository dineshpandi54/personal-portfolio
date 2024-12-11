window.addEventListener('scroll', function () {
    const navbar = document.querySelector(".navbar")
    navbar.classList.toggle("sticky", window.scrollY > 0)
})

const sideNav = document.querySelector(".side-navbar")

function showNavbar() {
    sideNav.style.top = "0"
}
function closeNavbar() {
    sideNav.style.top = "-100%"
}