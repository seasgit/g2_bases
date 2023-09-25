/* temps mis: 40mn */

let nb_star_clicked = 0;

const stars =  document.querySelectorAll('.stars .fa');
const note = document.querySelector('.note span');
const masques =  document.querySelectorAll('.mask');

for (const star of stars) {
    star.addEventListener('click', clicStar);
}

for (const mask of masques) {
    mask.addEventListener('click', clicMask);
}

function clicStar(){
    if(this.classList.contains('fa-star-o')) {
        this.classList.replace('fa-star-o','fa-star');
        nb_star_clicked++;
    }else{
        this.classList.replace('fa-star', 'fa-star-o');
        nb_star_clicked--;
    }
    note.textContent = nb_star_clicked;
}


function clicMask(){
    this.style.opacity =  1;
    setTimeout(() => {
        this.style.opacity = 0
    }, 800);
}

