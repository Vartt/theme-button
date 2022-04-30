// button => changing theme of the app
const button = document.querySelector(".btn");
const app = document.querySelector(".app");
function clicked() {
    // get app element
    document.body.classList.toggle('dark');
    // add to app element class .dark

}

button.addEventListener('click', clicked);