$(document).ready(function(){
    $('.toggle-btn').on("click", function() { 
    $('.dropdown-btn').toggleClass('top-[40px]'); 
    $('#textshow').hide(3000) ; 
    $('.toggle-btn').on("click",function(){
      $('#textshow').show(3000) ; 
    })   
})
   }); 




let slidesIndex = 0;
  showSlide();

function showSlide() {
  let i;
    let slide = document.getElementsByClassName("mySlide");
   for (i = 0; i < slide.length; i++) {
     slide[i].style.display = "none";
   }
   slidesIndex++;
   if (slidesIndex > slide.length) {slidesIndex = 1}
   slide[slidesIndex-1].style.display = "block";
   setTimeout(showSlide, 2500); // Change image every 2 seconds
 }



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// automatic slider

function showSlides(n) {
  let i;
  let slides = document.getElementsByClass("mySlides");
  let dots = document.getElementsByClass("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].class.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].class += " active";
}
// click Slider

let currentIndex = 0;
 const slides1 = document.querySelector('.slides1'); 
 const dots1 = document.querySelectorAll('.dot1');
  function showSlider(index) { 
    slides1.style.transform = `translateX(${-index * 100}%)`;
     dots1.forEach(dot1 => dot1.classList.remove('active'));
      dots1[index].classList.add('active'); }
       dots1.forEach((dot1, index) => { 
        dot1.addEventListener('click', () => {
             currentIndex = index; showSlider(index);
             });
             });
              setInterval(() => { 
                currentIndex = (currentIndex + 1) % dots1.length; showSlide(currentIndex);
             }, 4000);


 //slide slider          

 function benefitSlide(n) {
  let i;
  let slides1 = document.getElementsByClassName("benefitSlide");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
  
  