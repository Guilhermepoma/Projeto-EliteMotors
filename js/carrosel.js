const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide-item');
const totalSlides = slideItems.length;
let index = 0;

// Se não houver slide-item, usa as imagens diretamente (compatibilidade com páginas antigas)
const isNewStructure = slideItems.length > 0;
const slidesCount = isNewStructure ? slideItems.length : document.querySelectorAll('.slides img').length;

// Atualiza o carrossel conforme o tamanho da tela
function updateCarousel() {
  const slideWidth = document.querySelector('.carrossel').clientWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Avançar para o próximo slide
function nextSlide() {
  index = (index + 1) % slidesCount;
  updateCarousel();
}

// Voltar para o slide anterior
function prevSlide() {
  index = (index - 1 + slidesCount) % slidesCount;
  updateCarousel();
}

// Eventos dos botões
document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Avanço automático a cada 5 segundos
let autoSlide = setInterval(nextSlide, 5000);

// Reinicia o temporizador se o usuário clicar nos botões
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 5000);
}

// Ajusta o carrossel se a janela for redimensionada
window.addEventListener('resize', updateCarousel);

// Inicializa o primeiro estado
updateCarousel();

