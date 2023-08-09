let thumbnails = document.getElementsByClassName('thumbnail') 

let activeImages = document.getElementsByClassName('act')

let src = document.getElementById('featured').src

const images = [
  "./assets/img/Watch1.jpg",
  "./assets/img/Watch2.jpg",
  "./assets/img/Watch3.jpg"
];

let currentIndex = 0;

if (src === images[0]) {
  currentIndex = 0; 
} else if (src === images[1]) {
  currentIndex = 1;
} else if (src === images[2]) {
  currentIndex = 2;
}


for (let i = 0; i < thumbnails.length; i++) {

  thumbnails[i].addEventListener('click', function() {
    
    for (let img of activeImages) {
      img.classList.remove('act');
    } 
    
    this.classList.add('act');
    document.getElementById('featured').src = this.src;
    
  });

}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function() {
  
  currentIndex--;
  
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  let newSrc = images[currentIndex];

  document.getElementById('featured').src = newSrc;

  for (let img of activeImages) {
    img.classList.remove('act');
  } 
  
  thumbnails[currentIndex].classList.add('act');
  
  if (currentIndex == 2){
    document.getElementById('slider').scrollLeft += 400
  }
  else{
    document.getElementById('slider').scrollLeft -= 200
  }
  
});

buttonRight.addEventListener('click', function() {

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  let newSrc = images[currentIndex];  
  document.getElementById('featured').src = newSrc;

  for (let img of activeImages) {
    img.classList.remove('act');
  } 
  
  thumbnails[currentIndex].classList.add('act');
  
  if (currentIndex == 0){
    document.getElementById('slider').scrollLeft -= 400
  }
  else{
    document.getElementById('slider').scrollLeft += 180
  }

});