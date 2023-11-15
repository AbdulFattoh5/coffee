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
