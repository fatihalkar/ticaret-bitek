const navbar = document.querySelector('.navbar');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');
let isMenuOpen = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileNavToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

mobileNavToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) toggleMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        toggleMenu();
    }
});


//navbarın  kayarak geçişleri sağlandı
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.mobile-nav-toggle').offsetHeight;

        if (targetSection) {
            // Section içindeki başlığı al
            const sectionTitle = targetSection.querySelector('.section-title');
            let targetPosition;

            if (sectionTitle) {
                // Eğer başlık varsa, başlığın konumunu baz al
                targetPosition = sectionTitle.getBoundingClientRect().top + window.scrollY - navbarHeight - 120;
            } else {
                // Başlık yoksa, section'ın başına git
                targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 80;
            }

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                targetSection.style.opacity = '0';
                targetSection.style.transform = 'translateY(50px)';
                targetSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

                setTimeout(() => {
                    targetSection.style.opacity = '1';
                    targetSection.style.transform = 'translateY(0)';
                }, 100);
            }, 600);
        }
    });
});