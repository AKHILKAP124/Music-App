let song = document.querySelector(".song")
let ctrlbtn = document.querySelector('.ctrl-play')
let ctrlplaypause = document.querySelector('.ctrl-play i')
let progress = document.querySelector('#progress')
let v = fancyTimeFormat(song.duration)
let value = false
document.querySelector(".time").innerHTML = `${fancyTimeFormat(0)} / ${v}`

song.onloadedmetadata = ()=>{
    progress.max = song.duration;
    progress.value = song.currentTime;
}
console.log(progress.value);
console.log(progress);


ctrlbtn.addEventListener("click",()=>{
    if(ctrlplaypause.classList.contains('fa-play')){
        song.play();
        ctrlplaypause.classList.remove('fa-play')
        ctrlplaypause.classList.add('fa-pause')
        value = true
        time()
    }

    else{
        song.pause();
        ctrlplaypause.classList.remove('fa-pause')
        ctrlplaypause.classList.add('fa-play')
    }
})

function time(){
    if(value){
        setInterval(() => {
            document.querySelector(".time").innerHTML = `${fancyTimeFormat(Math.floor(song.currentTime))} / ${v}`
         }, 1000);
        setInterval(()=>{
            progress.value = song.currentTime;
            console.log(song.currentTime);
            console.log(progress.value);
            stopsong();
        }, 1000)
    }
    
}

progress.onchange = ()=>{
    song.currentTime = progress.value;
}

function stopsong(){
    if (progress.value === '162') {
        song.pause();
        ctrlplaypause.classList.remove('fa-pause')
        ctrlplaypause.classList.add('fa-play')
        progress.value = 0;
        document.querySelector(".time").innerHTML = `${fancyTimeFormat(0)} / ${v}`

    }
    
}

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;
  
    let ret = "";
  
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
  
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
  
    return ret;
  }
  



