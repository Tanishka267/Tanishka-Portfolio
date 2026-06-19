const text = [
"AI Enthusiast",
"Cybersecurity Learner",
"Cloud Computing Explorer",
"Software Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

current = text[i];

if (!isDeleting) {
j++;
}
else {
j--;
}

document.getElementById("typing").textContent =
current.substring(0,j);

if (!isDeleting && j === current.length) {

setTimeout(() => {
isDeleting = true;
},1000);

}

if (isDeleting && j === 0) {

isDeleting = false;
i++;

if(i === text.length){
i = 0;
}

}

setTimeout(type,isDeleting ? 50 : 120);

}

type();

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

});