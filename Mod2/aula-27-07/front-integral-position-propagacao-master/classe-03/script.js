const modal = document.querySelector('.modal');
const bugImg = document.querySelectorAll('.bug-img');

bugImg.forEach(img => {
    img.addEventListener('click', (event) => {
    
        modal.children[0].children[0].setAttribute('src', event.target.src);
        modal.children[0].setAttribute('href', event.target.src);
    
        modal.style.display = 'flex';
    });
});
modal.children[0].addEventListener('click', (event) => {
    event.stopPropagation();
});
modal.addEventListener('click', (event) => {
    modal.style.display = 'none';
});
