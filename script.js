console.log("Welcome to Spotify");

// //Initialize the variables
// let songindex = 0;
// let audioElement = new Audio('song/SoundHelix-Song-1.mp3');

// let masterPlay = document.getElementById('masterPlay')
// let myProgressBar = document.getElementById('myProgressBar')

// let songs = [
//     { songName:"SoundHelix-Song-1", filePath: "C:\Users\ADMIN\OneDrive\Desktop\Spotify\SoundHelix-Song-1", coverPath: "C:\Users\ADMIN\OneDrive\Desktop"},
//     { songName:"ForeEver Mine", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
//     { songName:"Sexy Eyes", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
//     { songName:"Barbie Girl", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
//     { songName:"Shut Up", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
//     { songName:"Calm down", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
//     { songName:"thunder", filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
    
// ]


// //Handle Play/Pause click
// masterPlay.addEventListener('click',()=>{
//     let icon = masterPlay.querySelector('i');
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         icon.classList.remove('fa-play')
//         icon.classList.add('fa-pause')
//     }
//     else{
//         audioElement.pause();
//         icon.classList.remove('fa-pause');
//         icon.classList.add('fa-play');
//     }
// });

// audioElement.addEventListener('timeupdate',() => {
//     let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//     myProgressBar.value = progress;
// });
// //Listen to Events
// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
// });