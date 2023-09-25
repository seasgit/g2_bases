/* temps mis: 40mn */

let nb_star_clicked = 0;

const stars = document.querySelectorAll('.stars .fa');
const note = document.querySelector('.note span');
const masques = document.querySelectorAll('.mask');

for (let i=0;i<stars.length;i++) {
    stars[i].i =  i;
    stars[i].addEventListener('click', clicStar);
}

for (const mask of masques) {
    mask.addEventListener('click', clicMask);
}

function clicStar() {
    resetStars();
    for(let i=0; i<= this.i; i++){
        stars[i].classList.replace('fa-star-o', 'fa-star');
    }
    note.textContent = this.i+1;
}


function clicMask() {
    this.style.opacity = 1;
    setTimeout(() => {
        this.style.opacity = 0
    }, 800);
}


function resetStars() {
    for (const star of stars) {
        star.classList.replace('fa-star', 'fa-star-o');
    }
}