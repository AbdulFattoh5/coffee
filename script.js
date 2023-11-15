// accordion
const accordion = document.getElementsByClassName('accordion__box');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');

        const content = this.querySelector('.content');

        if (this.classList.contains('active')) {
            content.style.height = content.scrollHeight + 'px';
        } else {
            content.style.height = '0';
        }
    });
}

// summary
let overlay = document.querySelector('.summary__overlay')
const mainBtn = document.querySelector('.accordion__btn'),
summary = document.querySelector('.summary'),
indexBtn = document.querySelector('.summary__btn');

mainBtn.addEventListener('click', function () {
    summary.style.display = 'block'
    overlay.style.display = 'block'
})

overlay.addEventListener('click', function () {
    overlay.style.display = 'none'
    summary.style.display = 'none'
})

indexBtn.addEventListener('click', function () {
    overlay.style.display = 'none'
    summary.style.display = 'none'
})