document.addEventListener('DOMContentLoaded', function() {
  // Бургер-меню
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });

  // Инструменты (аккордеон)
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

  // Форма подписки
  const form = document.getElementById('subscribeForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
      alert(`Спасибо за подписку, ${email}!`);
      form.reset();
    }
  });
});