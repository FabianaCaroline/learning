const btnFAQ = document.querySelector('.btn-faq');
const modal = document.querySelector('.modal');

btnFAQ.addEventListener('click', () => {
    modal.classList.toggle('escondido');
})