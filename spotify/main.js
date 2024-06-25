console.log("welcome to spotify");
// initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersong = document.getElementById('mastersong');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { Name: "kings dead", filePath: "1.mp3", coverPath: "cover1.jpg" },
    { Name: "productowner", filePath: "2.mp3", coverPath: "cover2.jpg" },
    { Name: "meri bathina", filePath: "3.mp3", coverPath: "cover3.jpg" },
    { Name: "sadeyan peran", filePath: "4.mp3", coverPath: "cover4.jpg" },
    { Name: "sterio", filePath: "5.mp3", coverPath: "cover5.jpg" },
    { Name: "I found you", filePath: "6.mp3", coverPath: "cover6.jpg" },
    { Name: "nothing is imp..", filePath: "7.mp3", coverPath: "cover7.jpg" },
]


    
songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].Name;
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})



// .giphy

// listen to events 
audioElement.addEventListener('timeupdate', () => {
    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = Progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


let isPlaying = false;

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        gif.style.opacity = 0;
        
        if (isPlaying) {
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            isPlaying = false;
        } else {
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `${songIndex+1}.mp3`;
            mastersong.innerText = songs[songIndex].Name;
            audioElement.currentTime = 0;
            Progress = parseInt(audioElement.currentTime);
         
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
            isPlaying = true;
            
        }
    })
})


document.getElementById('next').addEventListener ('click',()=>{
    if (songIndex==6){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    mastersong.innerText=songs[songIndex].Name;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener ('click',()=>{
    if (songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    mastersong.innerText=songs[songIndex].Name;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})


// Define an array of image URLs
const imageUrls = [
    "art1.jpeg",
    "art1.jpeg",
    "art1.jpeg",
    "art1.jpeg",
    "art1.jpeg",

    
];


// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         gif.style.opacity = 0;

//         audioElement.src = `${songIndex+1}.mp3`;
//         mastersong.innerText=songs[songIndex].Name;

//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;
        
//     })
// })


// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    //     element.addEventListener('click', (e) => {n
    //         makeAllPlays();
    //         const songIndex = parseInt(e.target.id);
    //         console.log('Clicked songIndex:', songIndex);
    //         e.target.classList.remove('fa-circle-play');
    //         e.target.classList.add('fa-circle-pause');
        //         audioElement.src = songs[songIndex].filePath; // Update src using the correct song file path
        //         audioElement.currentTime = 0;
        //         audioElement.play();
        //         masterPlay.classList.remove('fa-circle-play');
        //         masterPlay.classList.add('fa-circle-pause');
        //     });
        // });
        
        
        
        //  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        //      element.addEventListener('click', (e) => {
        //          // Toggle the play/pause state for the clicked element
        //          e.target.classList.toggle('fa-circle-play');
        //          e.target.classList.toggle('fa-circle-pause');
        
        //          // Optionally, you can pause all other elements except the clicked one
        //          Array.from(document.getElementsByClassName('songItemPlay')).forEach((otherElement) => {
        //              if (otherElement !== e.target) {
        //                  otherElement.classList.remove('fa-circle-pause');
        //                  otherElement.classList.add('fa-circle-play');
        //              }
        //          });
        
        //          // Your play/pause logic for the clicked element goes here
        //      });
        //  });