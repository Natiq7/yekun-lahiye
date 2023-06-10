const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
let slideNumber = 0;

//şəkil kaydırıcısının növbəti düyməsi
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");

  const fon = document.querySelector('.my-garage-fon')
  const img = slides[slideNumber].querySelector('img').src
  fon.style.backgroundImage = `url('${img}')`
});

//şəkil kaydırıcısının əvvəlki düyməsi
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");

  const fon = document.querySelector('.my-garage-fon')
  const img = slides[slideNumber].querySelector('img').src
  fon.style.backgroundImage = `url('${img}')`
});

//şəkil slayderinin avtomatik oynatılması
let playSlider;

let repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
    
    const fon = document.querySelector('.my-garage-fon')
    const img = slides[slideNumber].querySelector('img').src
    fon.style.backgroundImage = `url('${img}')`
  }, 4000);
}
repeater();

//mouseover üzərində şəkil slayderinin avtomatik oynatılmasını dayandırın
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//mouseout üzərində yenidən şəkil slayderinin avtomatik oynatılmasını başladın
slider.addEventListener("mouseout", () => {
  repeater();
});