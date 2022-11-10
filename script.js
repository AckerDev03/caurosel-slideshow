const delay = 4000; //ms

const slides = document.querySelector(".head-slide");
const radio = document.querySelector(".radio-item");
const radioCount = radio.childElementCount;
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

console.log(radioCount);
console.log(maxLeft);

let current = 0;
let radioCurrent = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
  radio.style.opacity = radioCount + "1";
}

if (radioCount == radioCurrent) {
  radioCount += radioCount;
  radioCount.style.opacity = 1;
}else{
  radioCurrent++
}


let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});

// Radio

function changeRadio(next = true) {
  if (next){
    radioCurrent 
  }
}
