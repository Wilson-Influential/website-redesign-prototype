// Influential redesign prototype — shared behaviour

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
}

// Services mega menu (click to open, click-away / Esc to close)
document.querySelectorAll('.has-mega').forEach((wrap) => {
  const btn = wrap.querySelector('button');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = wrap.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});
document.addEventListener('click', (e) => {
  document.querySelectorAll('.has-mega.open').forEach((wrap) => {
    if (!wrap.contains(e.target)) {
      wrap.classList.remove('open');
      wrap.querySelector('button').setAttribute('aria-expanded', 'false');
    }
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.has-mega.open').forEach((wrap) => {
      wrap.classList.remove('open');
      wrap.querySelector('button').setAttribute('aria-expanded', 'false');
    });
  }
});

// Scroll reveals
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Work page filters
const filterBtns = document.querySelectorAll('.filter');
const workCards = document.querySelectorAll('[data-cat]');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const want = btn.dataset.filter;
    workCards.forEach((card) => {
      const show = want === 'all' || card.dataset.cat.split(' ').includes(want);
      card.style.display = show ? '' : 'none';
    });
  });
});

// Contact form (prototype: no backend, show confirmation)
const form = document.querySelector('form.form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.form-note');
    if (note) {
      note.textContent = 'Thanks, this prototype does not send messages yet. On the live site this would reach the team at info@thisisinfluential.com.';
      note.style.display = 'block';
    }
  });
}
