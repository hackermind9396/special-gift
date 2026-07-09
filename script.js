/* ===========================================
   A Tiny Surprise For Bauni 🌸
=========================================== */

let currentPage = 0;

const pages = document.querySelectorAll(".page");

const loader = document.getElementById("loader");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const restartBtn = document.getElementById("restartBtn");

const envelope = document.getElementById("envelope");

const typedText = document.getElementById("typedText");

const nextButtons = document.querySelectorAll(".nextBtn");

const letter = `
Hey Aishwarya!! 🌸

I know things haven't been easy lately.

Some people haven't treated you
the way you deserve.

Some days probably feel heavier
than they should.

But none of that changes
who you are.

You're funny.

You're kind.

You're stronger than you think.

Who knew our random gossips 😏

would become one of my favourite
parts of the day.

I'm genuinely happy
you're my goated HG.

Whenever life gets too loud...

Borrow my belief in you
for a while.

🫂💗
`;

window.onload = ()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

},1800);

};

/* ---------------- Music ---------------- */

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="🔊";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

};

/* ---------------- Page Navigation ---------------- */

function showPage(index){

pages.forEach(page=>page.classList.remove("active"));

pages[index].classList.add("active");

currentPage=index;

}

nextButtons.forEach(btn=>{

btn.onclick=()=>{

showPage(currentPage+1);

};

});

if(yesBtn){

yesBtn.onclick=()=>{

showPage(1);

};

}

/* ---------------- Running No Button ---------------- */

if(noBtn){

function moveButton(){

const x=Math.random()*220-110;

const y=Math.random()*220-110;

noBtn.style.transform = `translate(${x}px,${y}px)`;

}

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("touchstart",moveButton);

}

/* ---------------- Envelope ---------------- */

if(envelope){

envelope.onclick=()=>{

envelope.classList.add("open");

typeLetter();

};

}

/* ---------------- Typewriter ---------------- */

let started=false;

function typeLetter(){

if(started) return;

started=true;

let i=0;

const speed=34;

function typing(){

if(i<letter.length){

typedText.innerHTML+=letter.charAt(i);

i++;

setTimeout(typing,speed);

}

}

typing();

}

/* ---------------- Floating Hearts ---------------- */

const heartContainer=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

const hearts=["💗","💕","💖","🌸","✨"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,500);

/* ---------------- Sparkles ---------------- */

const sparkleContainer=document.getElementById("sparkles");

for(let i=0;i<30;i++){

const s=document.createElement("div");

s.className="sparkle";

s.innerHTML="✨";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDelay=Math.random()*2+"s";

sparkleContainer.appendChild(s);

}

/* ---------------- Rain ---------------- */

const rain=document.getElementById("rain");

for(let i=0;i<120;i++){

const drop=document.createElement("div");

drop.className="drop";

drop.style.left=Math.random()*100+"vw";

drop.style.animationDuration=(0.6+Math.random())+"s";

drop.style.animationDelay=Math.random()*2+"s";

rain.appendChild(drop);

}

/* ---------------- Sunshine ---------------- */

const sun=document.createElement("div");

sun.className="sun";

document.getElementById("sunshine").appendChild(sun);

/* ---------------- Confetti ---------------- */

function launchConfetti(){

const confetti=document.getElementById("confetti");

const colors=[

"#ff5fa2",

"#ffd166",

"#7bdff2",

"#b8f2e6",

"#ffc8dd"

];

for(let i=0;i<180;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.background=

colors[Math.floor(Math.random()*colors.length)];

piece.style.animationDelay=Math.random()*2+"s";

confetti.appendChild(piece);

setTimeout(()=>{

piece.remove();

},5000);

}

}

/* ---------------- Final Page ---------------- */

function finalEffects(){

rain.style.opacity="0";

sun.style.opacity="1";

launchConfetti();
}

const originalShowPage=showPage;

showPage=function(index){

originalShowPage(index);

if(index===4){

finalEffects();

}

};

/* ---------------- Replay ---------------- */

if(restartBtn){

restartBtn.onclick=()=>{

location.reload();

};

}

/* ---------------- Easter Egg ---------------- */

let taps=0;

const cat=document.querySelector(".big");

if(cat){

cat.onclick=()=>{

taps++;

if(taps===7){

alert("🎉 Achievement Unlocked!\n\nBauni.exe has been successfully cheered up 🐱💗");

}

};

}
