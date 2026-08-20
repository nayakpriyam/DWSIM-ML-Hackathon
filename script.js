const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 18);
});

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Always return Home / Back to top links to the true page top.
document.querySelectorAll('a[href="#top"]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (history.replaceState) history.replaceState(null, '', '#top');
  });
});

// ML4ChemE hero wordmark — styled to match the promotional identity.
const heroKicker = document.querySelector('.hero-kicker');
if (heroKicker) {
  heroKicker.classList.add('ml4cheme-wordmark');
  heroKicker.setAttribute('aria-label', 'ML4ChemE');
  heroKicker.innerHTML = '<span class="wordmark-ml">ML</span><span class="wordmark-4">4</span><span class="wordmark-cheme">ChemE</span>';

  const wordmarkStyle = document.createElement('style');
  wordmarkStyle.textContent = `
    .hero-kicker.ml4cheme-wordmark {
      display: inline-flex;
      align-items: baseline;
      width: auto;
      white-space: nowrap;
      letter-spacing: -0.075em;
    }

    .ml4cheme-wordmark .wordmark-ml,
    .ml4cheme-wordmark .wordmark-cheme {
      color: var(--white);
      display: inline-block;
    }

    .ml4cheme-wordmark .wordmark-4 {
      color: var(--lime);
      display: inline-block;
      font-size: 1.10em;
      line-height: .72;
      margin: 0 .025em 0 .01em;
      transform: skew(-8deg) scaleY(1.06);
      transform-origin: center bottom;
      text-shadow: 0 0 28px rgba(184,240,74,.12);
    }

    @media (max-width: 600px) {
      .hero-kicker.ml4cheme-wordmark {
        letter-spacing: -0.07em;
      }
      .ml4cheme-wordmark .wordmark-4 {
        font-size: 1.08em;
      }
    }
  `;
  document.head.appendChild(wordmarkStyle);
}
