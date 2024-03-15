console.log('welcome to my Play Music')

// Intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

let songs = [
    {songName: 'Let me love you', filePath:'songs/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Let me love you', filePath:'songs/2.mp3', coverPath: 'covers/2.jpg'},
    {songName: 'Let me love you', filePath:'songs/3.mp3', coverPath: 'covers/3.jpg'},
    {songName: 'Let me love you', filePath:'songs/4.mp3', coverPath: 'covers/4.jpg'},
    {songName: 'Let me love you', filePath:'songs/5.mp3', coverPath: 'covers/5.jpg'},
    {songName: 'Let me love you', filePath:'songs/6.mp3', coverPath: 'covers/6.jpg'},
    {songName: 'Let me love you', filePath:'songs/7.mp3', coverPath: 'covers/7.jpg'},
    {songName: 'Let me love you', filePath:'songs/8.mp3', coverPath: 'covers/8.jpg'},
    {songName: 'Let me love you', filePath:'songs/9.mp3', coverPath: 'covers/9.jpg'},
    {songName: 'Let me love you', filePath:'songs/10.mp3', coverPath: 'covers/10.jpg'},
]

// handle play/pause btn
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
     }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{

    //update seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = Progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})


//////////////////////// song list playbtn
const makesAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle')
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makesAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    })
})


///////////////////////////Next btn
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
})


////////////////////////Previous btn
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex < 0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
})