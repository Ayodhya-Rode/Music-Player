// let progress = document.getElementById('progress')
// let song = document.getElementById('song')
// let ctrlIcon = document.getElementById('ctrlIcon')
// let currentTimeEl = document.getElementById('currentTime')
// let durationEl = document.getElementById('duration')
// let songNameEl = document.getElementById('song-name')
// let artistNameEl = document.getElementById('artist-name')
// let songImg = document.querySelector('.song-img')

// let currentSongIndex = 0;

// function loadSong(index) {
//     let songData = songs[index];
//     song.src = songData.src;
//     songNameEl.textContent = songData.name;
//     artistNameEl.textContent = songData.artist;
//     songImg.src = songData.img;
//     song.load();

//     progress.value = 0;
//     currentTimeEl.textContent = "0:00";
//     durationEl.textContent = "0:00";

//      if (autoPlay) {
//         song.play();
//         ctrlIcon.classList.remove("fa-play");
//         ctrlIcon.classList.add("fa-pause");
//     } else {
//         ctrlIcon.classList.remove("fa-pause");
//         ctrlIcon.classList.add("fa-play");
//     }
// }

// loadSong(currentSongIndex);

// song.onloadeddata = function (){
//     progress.max = song.duration
//     durationEl.textContent = formatTime(song.duration);
//     currentTimeEl.textContent = formatTime(song.currentTime);
// }

// function playPause(){
//     if(ctrlIcon.classList.contains("fa-pause")){
//         song.pause()
//         ctrlIcon.classList.remove("fa-pause");
//         ctrlIcon.classList.add("fa-play");
//     }
//     else{
//         song.play()
//         ctrlIcon.classList.remove("fa-play");
//         ctrlIcon.classList.add("fa-pause");

//     }
// }

// song.addEventListener('timeupdate', () => {
//     progress.value = song.currentTime;
//     currentTimeEl.textContent = formatTime(song.currentTime);
// });

// progress.addEventListener('input', () => {
//     song.currentTime = progress.value;
//     if (song.paused) {  
//          song.play();
//     }
//     ctrlIcon.classList.remove("fa-play");
//     ctrlIcon.classList.add("fa-pause");
// });

// document.getElementById('next').onclick = () => {
//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//     loadSong(currentSongIndex);
// }
// document.getElementById('prev').onclick = () => {
//     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//     loadSong(currentSongIndex);
// }

// function formatTime(seconds) {
//     let mins = Math.floor(seconds / 60);
//     let secs = Math.floor(seconds % 60);
//     if (secs < 10) secs = "0" + secs;
//     return `${mins}:${secs}`;
// }

// let isRepeat = false;

// document.getElementById('shuffle').onclick = () => {
//     isShuffle = !isShuffle;
//     document.getElementById('shuffle').classList.toggle("active");
// };

// document.getElementById('repeat').onclick = () => {
//     isRepeat = !isRepeat;
//     document.getElementById('repeat').classList.toggle("active");
// };

// song.addEventListener('ended', () => {
//     if (isRepeat) {
//         loadSong(currentSongIndex);
//     } else if (isShuffle) {
//         let randomIndex;
//        if (songs.length > 1) {
//             do {
//                 randomIndex = Math.floor(Math.random() * songs.length);
//             } while (randomIndex === currentSongIndex);
//         } else {
//             randomIndex = currentSongIndex;
//         }
//         currentSongIndex = randomIndex;
//         loadSong(currentSongIndex);
//     } else {
//         currentSongIndex = (currentSongIndex + 1) % songs.length;
//         loadSong(currentSongIndex);
//     }
// });


let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let currentTimeEl = document.getElementById('currentTime');
let durationEl = document.getElementById('duration');
let songNameEl = document.getElementById('song-name');
let artistNameEl = document.getElementById('artist-name');
let songImg = document.querySelector('.song-img');

let currentSongIndex = 0;
let isRepeat = false;

function loadSong(index, autoPlay = false) {
    let songData = songs[index];
    song.src = songData.src;
    songNameEl.textContent = songData.name;
    artistNameEl.textContent = songData.artist;
    songImg.src = songData.img;
    song.load();

    progress.value = 0;
    currentTimeEl.textContent = "0:00";
    durationEl.textContent = "0:00";

    if (autoPlay) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// load first song but don't play
loadSong(currentSongIndex, false);

song.onloadeddata = function () {
    progress.max = song.duration;
    durationEl.textContent = formatTime(song.duration);
    currentTimeEl.textContent = formatTime(song.currentTime);
};

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
    currentTimeEl.textContent = formatTime(song.currentTime);
});

progress.addEventListener('input', () => {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
    }
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});

document.getElementById('next').onclick = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex, true);
};

document.getElementById('prev').onclick = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex, true);
};

document.getElementById('repeat').onclick = () => {
    isRepeat = !isRepeat;
    document.getElementById('repeat').classList.toggle("active");
};

song.addEventListener('ended', () => {
    if (isRepeat) {
        loadSong(currentSongIndex, true);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex, true);
    }
});

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) secs = "0" + secs;
    return `${mins}:${secs}`;
}
