//javascript goes here

const app = function(){
   const song = document.querySelector('.song');
   const play = document.querySelector('.play');
   const outline = document.querySelector('.moving-outline circle');
   const video = document.querySelector('.vid-container video');

   //Sounds
   const sounds = document.querySelectorAll('.sound-picker button');

   //Time display
   const timeDisplay = document.querySelector('.time-display');

   //Time select
   const timeSelect = document.querySelectorAll('.time-select button');

   //Length of the outline
   const outlineLength = outline.getTotalLength();
   
   //Duration
   let fakeDuration = 600;


   outline.style.strokeDasharray = outlineLength;
   outline.style.strokeDashoffset = outlineLength;

   //play sound
   play.addEventListener('click',function(){
       checkPlaying(song);
   });

   //Play different sound
   sounds.forEach(function(sound){
    sound.addEventListener('click',function(){
        song.src = this.getAttribute('data-sound');
        video.src = this.getAttribute('data-video');
        checkPlaying(song);

    });
   });

   
   //Select sound
   timeSelect.forEach(function(option){
      option.addEventListener('click',function(){
        fakeDuration = this.getAttribute('data-time');
        timeDisplay.textContent = `${Math.floor(fakeDuration/60)} : ${Math.floor(fakeDuration%60)}`;
      })
   });

   //Create a function to stop and play a sound
    const checkPlaying = function(song){
        if(song.paused){
            song.play()
            video.play();
            play.src = './svg/pause.svg';
        }
        else{
            song.pause();
            video.pause();
            play.src = "./svg/play.svg";
        }
    };

    //We can animate the circle
    song.ontimeupdate = function(){
        let currentTime = song.currentTime;
        let elapsed = fakeDuration-currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        //Animate the circle
        let progress = outlineLength-(currentTime/fakeDuration ) * outlineLength;
        outline.style.strokeDasharray = progress;
        //Animate text
        timeDisplay.textContent = `${minutes}:${seconds}`;

        if(currentTime >= fakeDuration){
            song.pause();
            song.currentTime=0;
            play.src = './svg/play.svg';
            video.pause();

        }

    }
  

}

app();