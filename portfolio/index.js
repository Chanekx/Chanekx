
function reloadFile(){
    location.reload();
    console.log("Page Reloaded");
}
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Downscroll
        navbar.classList.add('hidden');
    } else {
        // Upscroll
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});