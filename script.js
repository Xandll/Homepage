// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll für Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer für Scroll-Animationen
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    // Beobachte alle Sektionen
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Aktive Navigation basierend auf Scroll-Position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        }); 

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
});
