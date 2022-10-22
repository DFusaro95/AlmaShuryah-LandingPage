
btnClose.onclick = function () {
  menu.classList.remove('active');

}

btnOpen.onclick = function () {
  menu.classList.add('active');

}

menu.addEventListener('click', function(e) {
  if (e.target.matches('.navbar__link')) { 
  menu.classList.remove('active');
  }
});
 // ---------- MODAL1 LOGIC ---------- 

let modal1 = document.getElementById('modalcard1'); 
let openBtn1 = document.getElementById('myBtn1');
let closeBtn1 = document.getElementsByClassName('close__modal')[0];

openBtn1.onclick = () => {
  modal1.classList.add('modal--show');
  console.log('Abriendo Modal1');
}

closeBtn1.onclick = () => {
  modal1.classList.remove('modal--show');
  console.log('Cerrando Modal1');
}

 // ---------- MODAL2 LOGIC ---------- 

let modal2 = document.getElementById('modalcard2'); 
let openBtn2 = document.getElementById('myBtn2');
let closeBtn2 = document.getElementsByClassName('close__modal')[1];

openBtn2.addEventListener('click',(e) => {
  e.preventDefault();
  modal2.classList.add('modal--show');
  console.log('Abriendo Modal2');
});

closeBtn2.addEventListener('click',(e) => {
  e.preventDefault();
  modal2.classList.remove('modal--show');
  console.log('Abriendo Modal2');
});

 // ---------- MODAL3 LOGIC ---------- 

let modal3 = document.getElementById('modalcard3'); 
let openBtn3 = document.getElementById('myBtn3');
let closeBtn3 = document.getElementsByClassName('close__modal')[2];

openBtn3.onclick = () => {
  modal3.classList.add('modal--show');
  console.log('Abriendo Modal3');
}

closeBtn3.onclick = () => {
  modal3.classList.remove('modal--show');
  console.log('Cerrando Modal3');
}

 // ---------- MODAL4 LOGIC ---------- 

let modal4 = document.getElementById('modalcard4'); 
let openBtn4 = document.getElementById('myBtn4');
let closeBtn4 = document.getElementsByClassName('close__modal')[3];

openBtn4.onclick = () => {
  modal4.classList.add('modal--show');
  console.log('Abriendo Modal4');
}

closeBtn4.onclick = () => {
  modal4.classList.remove('modal--show');
 console.log('Cerrando Modal4');
}

 // ---------- MODAL5 LOGIC ---------- 

let modal5 = document.getElementById('modalcard5'); 
let openBtn5 = document.getElementById('myBtn5');
let closeBtn5 = document.getElementsByClassName('close__modal')[4];

openBtn5.onclick = () => {
  modal5.classList.add('modal--show');
  console.log('Abriendo Modal5');
}

closeBtn5.onclick = () => {
  modal5.classList.remove('modal--show');
  console.log('Cerrando Modal5');
}

const backToTop = document.querySelector('.btn__up')

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    backToTop.classList.add('active')
  } else {
    backToTop.classList.remove('active')
  }
}) 