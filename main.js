window.addEventListener('keydown' , playAudio )
function playAudio(e){
let audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
let key =   document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return ;// stops the function from running
audio.currentTime =0;//rewind to start

audio.play();
key.classList.add('playing');
};

//setTimeout (function(){


//}, 1)
function removeTransition(e){
    if (e.propertyName!== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('playing');
}
let keys =document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

