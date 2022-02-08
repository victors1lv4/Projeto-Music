let audio = document.getElementById('audio');
let play2 = document.getElementById('play');
let bar = document.getElementById('myBar');
function back() {
    audio.currentTime -= 100;
}
function playAndPause() {
    if (audio.paused) {
        audio.play();
        play2.src = './imagens/icons/pause.svg';
    } else {
        audio.pause();
        play2.src = './imagens/icons/play.svg';
    }
}
function next() {
    audio.next();
}
audio.ontimeupdate = function (e) {
    bar.style.width =
        Math.floor((audio.currentTime * 100) / audio.duration) + '%';
};
console.log(bar);
audio.addEventListener('click', playAndPause());
