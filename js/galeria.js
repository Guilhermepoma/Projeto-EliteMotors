// Elementos da galeria
const galerias = document.querySelectorAll('.galeria-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.modal-prev');
const nextBtn = document.querySelector('.modal-next');

let currentIndex = 0;

// Array com informações das imagens
const imagens = [
    {
        src: 'imgs/carros/carrosel/Bugatti.png',
        titulo: 'Bugatti Chiron',
        descricao: 'Rei da Arrancada - O hypercar que bate recorde com 2.4s de 0 a 100 km/h'
    },
    {
        src: 'imgs/carros/carrosel/Koeni.png',
        titulo: 'Koenigsegg',
        descricao: 'Futuro da Condução - Avanços em tecnologia autônoma e elétrica'
    },
    {
        src: 'imgs/carros/carrosel/Pagani.png',
        titulo: 'Pagani Huayra',
        descricao: 'Obra-Prima Italiana - Uma joia da engenharia automotiva'
    },
    {
        src: 'imgs/carros/carrosel/Rolls_Royce.png',
        titulo: 'Rolls-Royce',
        descricao: 'Luxo Absoluto - O símbolo máximo de sofisticação e elegância'
    }
];

// Abrir modal ao clicar em uma imagem
galerias.forEach((item, index) => {
    item.addEventListener('click', () => {
        abrirModal(index);
    });
});

// Fechar modal ao clicar no X
closeBtn.addEventListener('click', fecharModal);

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});

// Navegação do modal
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagens.length) % imagens.length;
    atualizarModal();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagens.length;
    atualizarModal();
});

// Navegação com teclado
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'Escape') {
            fecharModal();
        }
    }
});

// Função para abrir modal
function abrirModal(index) {
    currentIndex = index;
    modal.style.display = 'flex';
    atualizarModal();
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function fecharModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Função para atualizar conteúdo do modal
function atualizarModal() {
    const imagem = imagens[currentIndex];
    modalImg.src = imagem.src;
    captionText.innerHTML = `<h2>${imagem.titulo}</h2><p>${imagem.descricao}</p>`;
}

// Efeito de hover nas imagens da galeria
galerias.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

