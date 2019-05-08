// Calcula a largura de um elemento.
function width (width) {return width.innerWidth || width.clientWidth || document.documentElement.clientWidth;}
// Calcula a altura de um elemento.
function height (height) {return height.innerHeight || height.clientHeight || document.documentElement.clientHeight;}
// Recupera a distância do topo ao fazer scroll.
function scrollTopPosition (scrollTopPosition) {return scrollTopPosition.scrollTop || document.documentElement.scrollTop;}
// Recupera a distância de um elemento para o topo.
function distTop (distTop) {return distTop.offsetTop;}
// Recupera uma contagem X
function length (length) {return length.length;}
// Recupera uma nova data
function newDate () {return new Date();}
// Recupera um seletor
function selectorTarget (target) {return document.querySelector(target);}
// Recupera vários seletores
function selectorsTarget (target) {return document.querySelectorAll(target);}
// Set Local Storage
function setLocalStorage (key, value){return localStorage.setItem(key, value);}
// Get Local Storage
function getLocalStorage (key){return localStorage.getItem(key);}
// Remove Local Storage
function removeLocalStorage (key){return localStorage.removeItem(key);}
// Set Session Storage
function setSessionStorage (key, value){return sessionStorage.setItem(key, value);}
// Get Session Storage
function getSessionStorage (key){return sessionStorage.getItem(key);}
// Remove Session Storage
function removeSessionStorage (key){return sessionStorage.removeItem(key);}
// Remove All Session Storage
function removeAllSessionStorage (){return sessionStorage.clear();}
/*
	Função que recupera o ano atual
	Para funcionar basta aplicar a classe _current-year onde quiser
*/
(function currentYear (){
	let _currentYear = selectorsTarget("._current-year");
	for(let i = 0; i < length(_currentYear); i++){_currentYear[i].innerText = newDate().getFullYear();}
}());
// Nav default
$('._nav-default').owlCarousel({
    margin:20,
    loop:false,
    dots: false,
    autoplay: true,
    autoWidth:true,
    items:7
})
// Banner rotativo
$('._banner-rotativo').owlCarousel({
	nav: false,
    dots: false,
    loop:true,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items:1
})