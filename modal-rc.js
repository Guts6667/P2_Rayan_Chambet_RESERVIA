const modalRcBtn = document.querySelector('.modal-rc-close-btn');
const modalRc = document.querySelector('.modal-rc');

modalRcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalRc.remove();
} )