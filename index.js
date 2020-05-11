window.addEventListener("load",()=>{
const sounds  = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");
const colors=[
    "#64e69e",
    "#c060d3",
    "#0c2cbd",
    "#70c4eb",
    "#e45468ec",
    "#d3d160"
];

//lets get going with the sounds 
pads.forEach((pad,index)=>{
//to see the list in pad console.log(pad) all div 
// console.log(index) to see the position 0 1 2 3 4 5 
pad.addEventListener('click',function(){
// to reset the previous track
sounds[index].currentTime=0;
//say click first strip index=0 so bubble.mp3 get play  
sounds[index].play();      
createBubble(index);                                  
                                    });



                         });
// function to make bubbles
const createBubble = (index)=>{
const bubble = document.createElement("div");
visual.appendChild(bubble);
bubble.style.backgroundColor=colors[index];
bubble.style.animation ="jump 1s ease";
// to make sure our app not get crashed. 
bubble.addEventListener('animationend',function(){
visual.removeChild(this);
});

};

                                    });