(function(){
    console.log('Welcome to Spotify Clone.in');
    //initialize the variables
    let audioElement = new Audio('songs/01 - Hymn For The Weekend.mp3');
    let index = 0;
    let masterPlay = document.querySelector('#masterPlay');
    let progressBar = document.getElementById('progressBar');
    let gif = document.getElementById('gif');
    let songItems = Array.from(document.getElementsByClassName('songItem'));
    let masterSongPlay = document.querySelector('.masterSongPlay');

    let songs = [
        {songName:'01 - Hymn For The Weekend', filePath:'songs/01 - Hymn For The Weekend.mp3', coverPath:'cover/Hymm for the Weekend.jpeg'},
        {songName:'02 - Viva La Vida', filePath:'songs/02 - Viva La Vida.mp3', coverPath:'cover/viva-la-vida.jpeg'},
        {songName:'03 - A Sky Full of Stars', filePath:'songs/03 - A Sky Full of Stars.mp3', coverPath:'cover/A sky full of stars.jpeg'},
        {songName:'04 - Violet Hill', filePath:'songs/04 - Violet Hill.mp3', coverPath:'cover/Voilet Hill.jpeg'},
        {songName:'05 - Princess of China', filePath:'songs/05 - Princess of China.mp3', coverPath:'cover/Princess of China.jpeg'},
        {songName:'06 - Charlie Brown', filePath:'songs/06 - Charlie Brown.mp3', coverPath:'cover/Charlie Brown.jpeg'},
    ]

    songItems.forEach((element, i) =>{
        element.getElementsByTagName('img')[0].src = songs[i].coverPath;
        element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
        })

    //handle play/pause
    masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime <= 0){
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            gif.style.opacity = 0;
        }
    })
    //listen to Events
    audioElement.addEventListener('timeupdate', ()=>{
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        progressBar.value = progress;
    })
    const makeallPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.add('fa-circle-play');
            element.classList.remove('fa-circle-pause');


        })
    }

    progressBar.addEventListener('change', ()=>{
        audioElement.currentTime = ((progressBar.value/100)*audioElement.duration);
    })
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            console.log();
            makeallPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `${songs[songIndex].filePath}`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            masterSongPlay.innerText = songs[songIndex].songName;
            gif.style.opacity = 1;
        })
    } )
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex >5){
            songIndex = 0;
        } else {
            songIndex += 1;
        }
        audioElement.src = `${songs[songIndex].filePath}`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterSongPlay.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
    })
    document.getElementById('prev').addEventListener('click', ()=>{
        if(songIndex <0){
            songIndex = 5;
        } else {
            songIndex -= 1;
        }
        audioElement.src = `${songs[songIndex].filePath}`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterSongPlay.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
    })
    
})();