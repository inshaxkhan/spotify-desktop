// song1
var s1=document.getElementById("song1");
const audioSrcOne="music/song1.mp3";
const audioOne=new Audio(audioSrcOne);

s1.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[0].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioOne.play();
    audioFour.pause();
    audioThree.pause();
    audioTwo.pause();
})

s1.addEventListener('dblclick',function(){
    document.getElementsByClassName("pause-button")[0].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
    audioOne.pause();
})



// song2
var s2=document.getElementById("song2");
const audioSrcTwo="music/song2.mp3";
const audioTwo=new Audio(audioSrcTwo);

s2.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[1].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioTwo.play();
    audioOne.pause();
    audioFour.pause();
    audioThree.pause();
})

s2.addEventListener('dblclick',function(){
    audioTwo.pause();
    document.getElementsByClassName("pause-button")[1].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
})



// song3
var s3=document.getElementById("song3");
const audioSrcThree="music/song3.mp3";
const audioThree=new Audio(audioSrcThree);

s3.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[2].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioThree.play();
    audioOne.pause();
    audioFour.pause();
    audioTwo.pause();
})

s3.addEventListener('dblclick',function(){
    document.getElementsByClassName("pause-button")[2].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
    audioThree.pause();
})


// song4
var s4=document.getElementById("song4");
const audioSrcFour="music/song4.mp3";
const audioFour=new Audio(audioSrcFour);

s4.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[3].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioFour.play();
    audioOne.pause();
    audioThree.pause();
    audioTwo.pause();
})

s4.addEventListener('dblclick',function(){
    audioFour.pause();
    document.getElementsByClassName("pause-button")[3].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
})



// song5
var s5=document.getElementById("song5");
const audioSrcFive="music/song8.mp3";
const audioFive=new Audio(audioSrcFive);

s5.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[4].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioFive.play();
    audioFour.pause();
    audioOne.pause();
    audioThree.pause();
    audioTwo.pause();
})

s5.addEventListener('dblclick',function(){
    audioFive.pause();
    document.getElementsByClassName("pause-button")[4].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
})



// song6
var s6=document.getElementById("song6");
const audioSrcSix="music/song1.mp3";
const audioSix=new Audio(audioSrcSix);

s6.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[5].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioSix.play();
    audioFour.pause();
    audioOne.pause();
    audioThree.pause();
    audioTwo.pause();
})

s6.addEventListener('dblclick',function(){
    audioSix.pause();
    document.getElementsByClassName("pause-button")[5].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
})



// song7
var s7=document.getElementById("song7");
const audioSrcSeven="music/song2.mp3";
const audioSeven=new Audio(audioSrcSeven);

s7.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[6].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioSeven.play();
    audioFour.pause();
    audioOne.pause();
    audioThree.pause();
    audioTwo.pause();
})

s7.addEventListener('dblclick',function(){
    audioSeven.pause();
    document.getElementsByClassName("pause-button")[6].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
})


// songa
var s8=document.getElementById("songa");
const audioSrcEight="music/song8.mp3";
const audioEight=new Audio(audioSrcEight);

s8.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[7].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioEight.play();
    audioFour.pause();
    audioOne.pause();
    audioThree.pause();
    audioTwo.pause();
})

s8.addEventListener('dblclick',function(){
    audioEight.pause();
    document.getElementsByClassName("pause-button")[7].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
})

// var currentDate= new Date().getFullYear;
// document.getElementsByClassName("copy-right")=currentDate;





//songb
var s9=document.getElementById("songb");
const audioSrcNine="music/song1.mp3";
const audioNine=new Audio(audioSrcNine);
s9.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[8].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioNine.play();
    audioFour.pause();
    audioThree.pause();
    audioTwo.pause();
})

s9.addEventListener('dblclick',function(){
    document.getElementsByClassName("pause-button")[8].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
    audioNine.pause();
})



// songc
var s10=document.getElementById("songc");
const audioSrcTen="music/song2.mp3";
const audioTen=new Audio(audioSrcTen);

s10.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[9].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioTen.play();
    audioOne.pause();
    audioFour.pause();
    audioThree.pause();
})

s10.addEventListener('dblclick',function(){
    audioTen.pause();
    document.getElementsByClassName("pause-button")[9].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
})




//songd
var s11=document.getElementById("songd");
const audioSrcEleven="music/song8.mp3";
const audioEleven=new Audio(audioSrcEleven);
s11.addEventListener('click',function(){
    document.getElementsByClassName("pause-button")[10].innerHTML="<i class='fa-solid fa-pause fa-lg'></i>";
    audioEleven.play();
    audioFour.pause();
    audioThree.pause();
    audioTwo.pause();
})

s11.addEventListener('dblclick',function(){
    document.getElementsByClassName("pause-button")[10].innerHTML="<i class='fa-solid fa-play fa-lg'></i>";
    audioEleven.pause();
})





























//alert("asd");
