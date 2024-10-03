//open modal ticket
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const close = document.querySelector('.js-modal-close');

//add open vao modal 
function showbuytickets(){
    modal.classList.add('open');
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showbuytickets);
}

//remove open trong modal 
function hiddenbuyticket(){
    modal.classList.remove('open');
}

close.addEventListener('click', hiddenbuyticket);
modal.addEventListener('click', hiddenbuyticket);

modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})



