window.addEventListener('keydown', function(e){

const audi = document.querySelector('audio[data-key="${e.keyCode}"]');
console.log(audi);
//console.log(e.keyCode);
});