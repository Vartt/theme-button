// button => changing theme of the app
const button = document.querySelector(".btn");
const app = document.querySelector(".app");

function clicked() {
    // get app element
    app.classList.toggle('dark');
    // add to app element class .dark
    button.classList.toggle('dark-btn');
}

button.addEventListener('click', clicked);