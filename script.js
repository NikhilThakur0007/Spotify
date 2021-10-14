console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {
        songName: "Believer", filePath: "song1.mp3", coverPath: "cover/cover1.jpg"
    },
    {
        songName: "Sanam Teri Kasam", filePath: "songs/stk.mp3", coverPath: "cover/stk.jpg"
    },
    {
        songName: "Vichhola", filePath: "songs/vichhola.mp3", coverPath: "cover/vichhola.jpg"
    },
    {
        songName: "Qismat", filePath: "songs/qismat.mp3", coverPath: "cover/qismat.jpg"
    },
    {
        songName: "Closer Chainsmokers", filePath: "songs/closer.mp3", coverPath: "cover/closer.jpg"
    },
    {
        songName: "Lean on", filePath: "songs/lean.mp3", coverPath: "cover/lean.jpg"
    },
    {
        songName: "Raatan Lambiayan", filePath: "songs/rataan.mp3", coverPath: "cover/rataan.jpg"
    },
    {
        songName: "Man Bhareya 2", filePath: "songs/mb.mp3", coverPath: "cover/mb.jpg"
    },
    {
        songName: "Here And There", filePath: "songs/ht.mp3", coverPath: "cover/HT.jpg"
    },
    {
        songName: "Jatt Di Clip", filePath: "songs/jdc.mp3", coverPath: "cover/jdc.jpg"
    },
]


songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate')


    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})