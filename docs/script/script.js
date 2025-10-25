
        document.addEventListener('DOMContentLoaded', function() {
            // Мобильное меню
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            
            menuToggle.addEventListener('click', function() {
                menuToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Закрытие меню при клике на ссылку
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
            
            // Плавная прокрутка
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Кнопка "Наверх"
            const scrollToTopBtn = document.querySelector('.scroll-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    scrollToTopBtn.classList.add('active');
                } else {
                    scrollToTopBtn.classList.remove('active');
                }
            });
            
            scrollToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Анимация появления элементов при скролле
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInOnScroll = function() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            };
            
            // Запускаем при загрузке и при скролле
            window.addEventListener('scroll', fadeInOnScroll);
            fadeInOnScroll();
            
            // Изменение стиля шапки при скролле
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.15)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.1)';
                }
            });
        });
