'use strict';

//create variables for all the elements

//1. modal windows
const window1 = document.querySelector('.show1');
const window2 = document.querySelector('.show2');
const window3 = document.querySelector('.show3');

//2 overaly
const overlay = document.querySelector('.overlay');

//3. close window button
const close1 = document.querySelector('.close-modal1');
const close2 = document.querySelector('.close-modal2');
const close3 = document.querySelector('.close-modal3');

//4. open facts button
const openFactsBtn1 = document.querySelector('.modal-button1');
const openFactsBtn2 = document.querySelector('.modal-button2');
const openFactsBtn3 = document.querySelector('.modal-button3');

openFactsBtn1.addEventListener('click', function () {
  console.log('button clicked');
  document.querySelector('.show1').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
});

openFactsBtn2.addEventListener('click', function () {
  console.log('button clicked');
  document.querySelector('.show2').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
});

openFactsBtn3.addEventListener('click', function () {
  console.log('button clicked');
  document.querySelector('.show3').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
});

//close button

const closeWindows = function () {
  document.querySelector('.show3').classList.add('hidden');
  document.querySelector('.show1').classList.add('hidden');
  document.querySelector('.show2').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};
close1.addEventListener('click', function () {
  closeWindows();
});

close2.addEventListener('click', function () {
  closeWindows();
});

close3.addEventListener('click', function () {
  closeWindows();
});

overlay.addEventListener('click', function () {
  closeWindows();
});

//the escape key
document.addEventListener('keydown', function (x) {
  console.log(x.key);
  if (x.key === 'Escape') {
    if (
      !window1.classList.contains('hidden') ||
      !window2.classList.contains('hidden') ||
      !window3.classList.contains('hidden')
    ) {
      closeWindows();
    }
  }
});
