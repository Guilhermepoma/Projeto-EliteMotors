const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slides img').length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % total;
  slides.style.transform = `translateX(-${index * 600}px)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + total) % total;
  slides.style.transform = `translateX(-${index * 600}px)`;
});