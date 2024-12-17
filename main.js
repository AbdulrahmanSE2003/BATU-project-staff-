const text = ["Learn More About Our Faculty", "Explore Departments & Expertise", "Leaders in Education", "Shaping Future Generations"];
let index = 0;
let charIndex = 0;
const typingSpeed = 110; 
const erasingSpeed = 95; 
const delayBetweenTexts = 2000; 
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

// function type() {
//   if (charIndex < text[index].length) {
//     typedText.textContent += text[index].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingSpeed);
//   } else {
//     setTimeout(erase, delayBetweenTexts);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     typedText.textContent = text[index].substring(0, charIndex - 1);
//     charIndex--;
//     setTimeout(erase, erasingSpeed);
//   } else {
//     index = (index + 1) % text.length; // Move to the next text
//     setTimeout(type, typingSpeed);
//   }
// }

// // Start the typing effect
// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(type, delayBetweenTexts);
// });



function type(){
  if (charIndex < text[index].length){
    typedText.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else{
    setTimeout(erase, erasingSpeed);
  }
}

function erase(){
  if (charIndex > 0){
    typedText.textContent = text[index].substring(0,charIndex -1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else{
    index = (index +1 ) % text.length;
    setTimeout(type, typingSpeed)
  }
}

document.addEventListener("DOMContentLoaded", () =>{
  setTimeout(type, delayBetweenTexts)
})