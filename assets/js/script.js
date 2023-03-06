function pressKey(e)
{
    const audio = document.querySelector('audio[class="key"]');
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!(e.key=='q'||e.key=='w'||e.key=='e'||e.key=='r'||e.key=='a'||e.key=='s'||e.key=='d'||e.key=='f'))return //stop the function
    
    if(notPressing){
        notPressing=false
        audio.currentTime = 0;
        audio.play();
        
    }
    key.classList.add('pressing');
}
function leaveKey(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!(e.key=='q'||e.key=='w'||e.key=='e'||e.key=='r'||e.key=='a'||e.key=='s'||e.key=='d'||e.key=='f'))return //stop the function
    key.classList.remove('pressing');
    notPressing=true
}

const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', pressKey);
window.addEventListener('keyup', leaveKey);
var notPressing = true

