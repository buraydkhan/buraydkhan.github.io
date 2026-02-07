document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const typingElement = document.querySelector('.typing-effect');
    const textToType = "Strategizing Code like a Grandmaster...";
    const typingSpeed = 50;
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Clear initial text and start typing
    if (typingElement) {
        typingElement.textContent = '';
        setTimeout(typeText, 1000);
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isMenuOpen = navLinks.style.display === 'flex';
            navLinks.style.display = isMenuOpen ? 'none' : 'flex';

            // Add mobile specific styles dynamically if needed, 
            // or toggle a class that handles it in CSS (better approach)
            navLinks.classList.toggle('active');
        });
    }

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Add base class
        observer.observe(section);
    });

    // Add Glitch Effect to random elements occasionally
    const glitchElements = document.querySelectorAll('.glitch-text, .btn-glitch');

    function triggerRandomGlitch() {
        const randomEl = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        if (randomEl) {
            randomEl.classList.add('active-glitch');
            setTimeout(() => {
                randomEl.classList.remove('active-glitch');
            }, 200);
        }
        setTimeout(triggerRandomGlitch, Math.random() * 3000 + 2000);
    }

    triggerRandomGlitch();
});
