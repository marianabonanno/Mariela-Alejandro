const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-04-26T18:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div class="time"><span>${days}</span>Días</div>
    <div class="time"><span>${hours}</span>Horas</div>
    <div class="time"><span>${minutes}</span>Minutos</div>
    <div class="time"><span>${seconds}</span>Segundos</div>
  `;

  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "¡Es el gran día!";
  }
}

const interval = setInterval(updateCountdown, 1000);

// script.js
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = dots.length;
const slideInterval = 3000; // Tiempo entre cada slide (en milisegundos)

// Función para actualizar el carrusel
function updateCarousel(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Función para avanzar automáticamente
function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel(currentIndex);
}

// Agregar evento click a las pelotitas
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.index);
    updateCarousel(currentIndex);
    clearInterval(autoPlay); // Reiniciar el intervalo
    autoPlay = setInterval(autoSlide, slideInterval);
  });
});

// Iniciar el carrusel automático
let autoPlay = setInterval(autoSlide, slideInterval);

const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

// Muestra el pop-up al hacer clic en cualquier botón con la clase `showPopupBtn`
document.querySelectorAll(".showPopupBtn").forEach(button => {
    button.addEventListener("click", () => {
        popup.style.display = "flex"; // Muestra el pop-up
    });
});

// Cierra el pop-up al hacer clic en la "X" o fuera del contenido
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});


const popup1 = document.getElementById("popup1");
const closePopupBtn1 = document.getElementById("closePopupBtn1");

document.querySelectorAll(".showPopupBtn1").forEach(button => {
    button.addEventListener("click", () => {
        popup1.style.display = "flex"; // Muestra el pop-up
    });
});

closePopupBtn1.addEventListener("click", () => {
    popup1.style.display = "none";
});

popup1.addEventListener("click", (event) => {
    if (event.target === popup1) {
        popup1.style.display = "none";
    }
});

const popup2 = document.getElementById("popup2");
const closePopupBtn2 = document.getElementById("closePopupBtn2");

document.querySelectorAll(".showPopupBtn2").forEach(button => {
    button.addEventListener("click", () => {
        popup2.style.display = "flex"; // Muestra el pop-up
    });
});

closePopupBtn2.addEventListener("click", () => {
    popup2.style.display = "none";
});

popup2.addEventListener("click", (event) => {
    if (event.target === popup2) {
        popup2.style.display = "none";
    }
});
