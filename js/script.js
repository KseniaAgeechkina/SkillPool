document.addEventListener('DOMContentLoaded', function() {
  // ===== БУРГЕР-МЕНЮ =====
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    document.querySelectorAll('.nav__list a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }

  // ===== СЛАЙДЕР В БЛОКЕ РОСТА =====
  const track = document.getElementById('growthSliderTrack');
  const prevBtn = document.getElementById('growthPrev');
  const nextBtn = document.getElementById('growthNext');

  if (track && prevBtn && nextBtn) {
    const cards = track.children;
    const totalCards = cards.length;
    let currentIndex = 0;
    let visibleCards = 4;

    function updateVisibleCards() {
      const containerWidth = track.parentElement.offsetWidth;
      let newVisible = 4;
      if (containerWidth < 500) newVisible = 1;
      else if (containerWidth < 834) newVisible = 2;
      else if (containerWidth < 1194) newVisible = 3;
      else newVisible = 4;
      
      if (newVisible !== visibleCards) {
        visibleCards = newVisible;
        const maxIndex = Math.max(0, totalCards - visibleCards);
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        updateSlider();
      }
    }

    function updateSlider() {
      if (cards.length === 0) return;
      const cardWidth = cards[0].offsetWidth || 200;
      const gap = 24; // соответствует gap в .slider-track
      const offset = currentIndex * (cardWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;
    }

    nextBtn.addEventListener('click', () => {
      const maxIndex = Math.max(0, totalCards - visibleCards);
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    window.addEventListener('resize', () => {
      updateVisibleCards();
    });

    // Инициализация
    setTimeout(() => {
      updateVisibleCards();
      updateSlider();
    }, 100);
  }

  // ===== АККОРДЕОН ДЛЯ ИНСТРУМЕНТОВ =====
  const toolsItems = document.querySelectorAll('.tools-item');
  const toolsContents = document.querySelectorAll('.tools-content');
  toolsItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetId = this.dataset.target;
      toolsContents.forEach(content => content.classList.remove('active'));
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.toggle('active');
      }
    });
  });
  // Открыть первую папку по умолчанию
  const firstContent = document.querySelector('.tools-content');
  if (firstContent) firstContent.classList.add('active');

  // ===== ФОРМА ПОДПИСКИ =====
  const form = document.getElementById('subscribeForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      if (email) {
        alert(`Спасибо за подписку, ${email}!`);
        form.reset();
      }
    });
  }
});