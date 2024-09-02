const texts = [
    "DEVELOPER",
    "DESIGNER",
    "CREATOR"
]

let speed = 100;
let xspeed = 50;
const textElements = document.querySelector(".typewriter-text");
const autowrite = document.querySelector(".auto-write");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter;

const abtme = "I'm a programmer that want to be a Good Job without expecting any package from Company, I'm a dedicated Web Developer and I respect my skills that I learn in my college time"

function autoWriter(){
    if (charcterIndex < abtme.length){
        autowrite.innerHTML += abtme.charAt(charcterIndex);
        charcterIndex++;
        setTimeout(autoWriter, xspeed); 
    }
}
