// manipulating classes is the main way used to manipulate web pages
'use strict';

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal'); //selects only the first element with matching the selector. Limiting if there exist multiple elements with the same selector e.g class name
const btnShowModal = document.querySelectorAll('.show-modal'); // select all elements if multiple elements match the same selector. Returns a node list (array) containing all matching elements

const showModal = () => {
  // function for revealing modal
  modal.classList.remove('hidden'); //remove/disable 'hidden' class from modal ie. make it visible
  overlay.classList.remove('hidden'); //remove/disable 'hidden' class from overlay ie. enable it
};

const closeModal = () => {
  // function for closing modal
  modal.classList.add('hidden'); //restore/add 'hidden' class to modal ie. make it not visible
  overlay.classList.add('hidden'); //restore/add 'hidden' class to overlay ie. enable not visible
};

for (let i = 0; i < btnShowModal.length; i++) {
  //looping through the node list
  btnShowModal[i].addEventListener('click', () => {
    //select element in list and attach an event handler function to the element
    showModal();
  });
}

btnCloseModal.addEventListener('click', () => {
  //event handler for clicking 'X' button on the modal (&times)
  closeModal(); //calling the function inside the event handler fuction
});

// event handler for clicking outside the modal (in the overlay)
overlay.addEventListener('click', closeModal); //alternative to calling the function inside the event handler fuction

document.addEventListener('keydown', function (evt) {
  //add key-down press event handler - with event object (e) parsed as the argument
  //check if modal is not hidden
  if (evt.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
