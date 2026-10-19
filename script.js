const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menú');
    });
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();

const emailLink = document.querySelector('#email-link');
const copyButton = document.querySelector('#copy-email');
if (emailLink && copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = emailLink.textContent.replace('↗', '').trim();
    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = '¡Copiado!';
      window.setTimeout(() => copyButton.textContent = 'Copiar email', 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}
