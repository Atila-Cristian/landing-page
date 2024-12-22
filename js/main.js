const openModal = document.querySelector('.hero-cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');


//abrir modal 
openModal.addEventListener('click', (e)=> {
  e.preventDefault(); 
  modal.classList.add('modal-show');
});

//cerrar modal
closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal-show');
});