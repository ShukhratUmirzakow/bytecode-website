// ============= Konstantalar =============
const SCROLL_THRESHOLD = 300;
const ANIMATION_THRESHOLD = 0.1;
const API_URL = 'https://bytecodeteam-yfw3dy5vi-justinabguy7-gmailcoms-projects.vercel.app/api/send-message'; // Vercel URL manzili

// Ikonka HTML'lari
const ICONS = {
    services: '<div class="icon icon-services"><i class="fas fa-tools"></i></div>',
    portfolio: '<div class="icon icon-portfolio"><i class="fas fa-folder"></i></div>',
    vacancies: '<div class="icon icon-vacancies"><i class="fas fa-users"></i></div>',
    contact: '<div class="icon icon-contact"><i class="fas fa-envelope"></i></div>',
    rocket: '<div class="icon icon-rocket"><i class="fas fa-rocket"></i></div>',
    web: '<div class="icon icon-web"><i class="fas fa-globe"></i></div>',
    mobile: '<div class="icon icon-mobile"><i class="fas fa-mobile-alt"></i></div>',
    ai: '<div class="icon icon-ai"><i class="fas fa-brain"></i></div>',
    automation: '<div class="icon icon-automation"><i class="fas fa-cogs"></i></div>',
    menu: '<i class="fas fa-bars"></i>',
    close: '<i class="fas fa-times"></i>',
    back: '<i class="fas fa-chevron-up"></i>',
    check: '<i class="fas fa-check"></i>'
};

// ============= DOM Elementlarini tanlash =============
const domElements = {
    header: document.querySelector('.header'),
    mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
    navLinks: document.querySelector('.nav-links'),
    languageSwitcher: document.querySelector('.language-switcher'),
    currentLang: document.querySelector('.current-lang'),
    langDropdown: document.querySelector('.lang-dropdown'),
    backToTopBtn: document.getElementById('back-to-top'),
    portfolioGrid: document.querySelector('.portfolio-grid'),
    vacanciesGrid: document.querySelector('.vacancies-grid'),
    contactForm: document.getElementById('contact-form'),
    sections: document.querySelectorAll('section')
};

// ============= Til sozlamalari =============
const languages = {
    en: {
        services: `${ICONS.services} Services`,
        portfolio: `${ICONS.portfolio} Portfolio`,
        vacancies: `${ICONS.vacancies} Vacancies`,
        contact: `${ICONS.contact} Contact`,
        heroTitle: 'We craft digital experiences that matter',
        heroSubtitle: 'Transforming ideas into elegant solutions',
        ctaButton: `${ICONS.rocket} Let's build something amazing together!`,
        viewProject: 'View Project',
        applyNow: 'Apply Now',
        requirements: 'Requirements:',
        benefits: 'Benefits:',
        sendMessage: `Send Message ${ICONS.contact}`,
        namePlaceholder: 'Your Name',
        contactPlaceholder: 'Telegram or Phone Number',
        messagePlaceholder: 'Your Message',
        messageSent: `Message sent successfully ${ICONS.check}`,
        messageError: 'Error sending message. Please try again.',
        ourServices: 'Our Services',
        ourWork: 'Our Work',
        joinTeam: 'Join Our Team',
        ourTeam: 'Our Team',
        getInTouch: 'Get in Touch',
        allRightsReserved: ' '
    },
    ru: {
        services: `${ICONS.services} Услуги`,
        portfolio: `${ICONS.portfolio} Портфолио`,
        vacancies: `${ICONS.vacancies} Вакансии`,
        contact: `${ICONS.contact} Контакты`,
        heroTitle: 'Мы создаем цифровые решения, которые имеют значение',
        heroSubtitle: 'Превращаем идеи в элегантные решения',
        ctaButton: `${ICONS.rocket} Давайте создадим что-то удивительное!`,
        viewProject: 'Посмотреть проект',
        applyNow: 'Откликнуться',
        requirements: 'Требования:',
        benefits: 'Преимущества:',
        sendMessage: `Отправить сообщение ${ICONS.contact}`,
        namePlaceholder: 'Ваше имя',
        contactPlaceholder: 'Telegram или номер телефона',
        messagePlaceholder: 'Ваше сообщение',
        messageSent: `Сообщение успешно отправлено ${ICONS.check}`,
        messageError: 'Ошибка отправки сообщения. Попробуйте еще раз.',
        ourServices: 'Наши услуги',
        ourWork: 'Наши работы',
        joinTeam: 'Присоединяйтесь к нам',
        ourTeam: 'Наша команда',
        getInTouch: 'Свяжитесь с нами',
        allRightsReserved:  ''
    },
    uz: {
        services: `${ICONS.services} Xizmatlar`,
        portfolio: `${ICONS.portfolio} Portfolio`,
        vacancies: `${ICONS.vacancies} Vakansiyalar`,
        contact: `${ICONS.contact} Aloqa`,
        heroTitle: 'Biz muhim raqamli yechimlarni yaratamiz',
        heroSubtitle: 'Tez Kunda!',
        ctaButton: `${ICONS.rocket} Biz bilan ishlang!`,
        viewProject: 'Loyihani koʻrish',
        applyNow: 'Ariza topshirish',
        requirements: 'Talablar:',
        benefits: 'Imkoniyatlar:',
        sendMessage: `Xabar yuborish ${ICONS.contact}`,
        namePlaceholder: 'Ismingiz',
        contactPlaceholder: 'Telegram yoki telefon raqamingiz',
        messagePlaceholder: 'Xabaringiz',
        messageSent: `Xabar muvaffaqiyatli yuborildi ${ICONS.check}`,
        messageError: 'Xabar yuborishda xatolik yuz berdi. Qaytadan urinib koʻring.',
        ourServices: 'Bizning xizmatlar',
        ourWork: 'Bizning ishlar',
        joinTeam: 'Jamoaga qoʻshiling',
        ourTeam: 'Bizning jamoa',
        getInTouch: 'Bogʻlanish',
        allRightsReserved: ' '
    }
};

// ============= Portfolio ma'lumotlari =============
const portfolioItems = [
    {
        title: 'E-commerce Platform',
        description: 'Modern online shopping experience with AI-powered recommendations',
        image: 'assets/portfolio-1.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: '#'
    },
    {
        title: 'AI Chat Assistant',
        description: 'Intelligent customer support solution with natural language processing',
        image: 'assets/portfolio-2.jpg',
        technologies: ['Python', 'TensorFlow', 'FastAPI'],
        link: '#'
    },
    {
        title: 'Mobile Banking App',
        description: 'Secure and user-friendly mobile banking solution',
        image: 'assets/portfolio-3.jpg',
        technologies: ['Flutter', 'Firebase', 'Node.js'],
        link: '#'
    }
];

// ============= Vakansiyalar ma'lumotlari =============
const vacancies = [
    {
        title: 'Senior Frontend Developer',
        description: 'Join us in creating beautiful web experiences',
        requirements: [
            '5+ years experience in frontend development',
            'Expert knowledge of React and modern JavaScript',
            'Strong UI/UX design skills',
            'Experience with state management (Redux, MobX)',
            'Understanding of modern web technologies and best practices'
        ],
        benefits: [
            'Competitive salary',
            'Remote work options',
            'Professional development budget',
            'Health insurance'
        ]
    },
    {
        title: 'Backend Developer',
        description: 'Build robust and scalable backend systems',
        requirements: [
            '3+ years experience in backend development',
            'Strong knowledge of Node.js and Express',
            'Experience with MongoDB and SQL databases',
            'Understanding of microservices architecture',
            'Knowledge of Docker and Kubernetes'
        ],
        benefits: [
            'Flexible working hours',
            'Stock options',
            'Modern office',
            'Team building events'
        ]
    }
];

// ============= Funksiyalar =============

// Mobil menyu
function toggleMobileMenu(e) {
    e.stopPropagation();
    domElements.navLinks.classList.toggle('active');
    const isOpen = domElements.navLinks.classList.contains('active');
    domElements.mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    document.body.classList.toggle('menu-open', isOpen);
}

// Til o'zgartirish
function setupLanguageSwitcher() {
    const langOptions = document.querySelectorAll('.lang-option');
    const savedLang = localStorage.getItem('preferred_language') || 'en';
    
    // Joriy tilni belgilash
    langOptions.forEach(option => {
        const lang = option.getAttribute('data-lang');
        if (lang === savedLang) {
            option.classList.add('active');
        }
        
        option.addEventListener('click', () => {
            // Avvalgi aktivni o'chirish
            langOptions.forEach(opt => opt.classList.remove('active'));
            // Yangi aktivni qo'shish
            option.classList.add('active');
            // Tilni o'zgartirish
            changeLanguage(lang);
        });
    });
}

// Til o'zgartirish
function changeLanguage(lang) {
    const currentLang = languages[lang];
    if (!currentLang) return;

    // DOM elementlarini yangilash
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentLang[key]) {
            element.innerHTML = currentLang[key];
        }
    });

    // Placeholder'larni yangilash
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (currentLang[key]) {
            element.placeholder = currentLang[key];
        }
    });

    // Joriy til ko'rsatkichini yangilash
    domElements.currentLang.textContent = lang.toUpperCase();
    
    // Til menyusini yopish
    domElements.langDropdown.classList.remove('active');
    
    // Local Storage'ga saqlash
    localStorage.setItem('preferred_language', lang);
}

// Portfolio elementlarini yaratish
function createPortfolioItems() {
    domElements.portfolioGrid.innerHTML = portfolioItems.map(item => `
        <div class="portfolio-card fade-in">
            <img src="${item.image}" alt="${item.title}" class="portfolio-image">
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="technologies">
                    ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${item.link}" class="cta-button" target="_blank">View Project</a>
            </div>
        </div>
    `).join('');
}

// Vakansiyalarni yaratish
function createVacancies() {
    domElements.vacanciesGrid.innerHTML = vacancies.map(vacancy => `
        <div class="vacancy-card fade-in">
            <h3>${vacancy.title}</h3>
            <p>${vacancy.description}</p>
            <div class="requirements">
                <h4>Requirements:</h4>
                <ul>
                    ${vacancy.requirements.map(req => `<li>${req}</li>`).join('')}
                </ul>
            </div>
            <div class="benefits">
                <h4>Benefits:</h4>
                <ul>
                    ${vacancy.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
            <button class="cta-button apply-btn">Apply Now</button>
        </div>
    `).join('');
}

// Scroll animatsiyasi
function handleScroll() {
    // "Tepaga" tugmasini ko'rsatish/yashirish
    if (window.scrollY > SCROLL_THRESHOLD) {
        domElements.backToTopBtn.classList.add('visible');
    } else {
        domElements.backToTopBtn.classList.remove('visible');
    }

    // Header orqa fonini o'zgartirish
    const headerOpacity = Math.min(window.scrollY / 200, 0.8);
    domElements.header.style.backgroundColor = `rgba(255, 255, 255, ${headerOpacity})`;
}

// Elementlarni scroll paytida animatsiya bilan ko'rsatish
function setupScrollAnimation() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: ANIMATION_THRESHOLD }
    );

    domElements.sections.forEach(section => {
        section.classList.add('opacity-0');
        observer.observe(section);
    });
}

// Telegram orqali xabar yuborish
async function sendTelegramMessage(data) {
    try {
        console.log('Sending message to Telegram:', data); // Yuborilayotgan ma'lumotlarni log qilish

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                contact: data.contact,
                message: data.message
            })
        });

        console.log('Response status:', response.status); // Response statusini log qilish

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Server error:', errorData); // Server xatosini log qilish
            throw new Error(`Network response was not ok: ${response.status} ${errorData}`);
        }

        const result = await response.json();
        console.log('Server response:', result); // Server javobini log qilish

        return result.success || true;
    } catch (error) {
        console.error('Error sending message:', error);
        return false;
    }
}

// Kontakt formani yuborish
async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const currentLang = localStorage.getItem('preferred_language') || 'en';
    const translations = languages[currentLang];

    if (!data.name || !data.contact || !data.message) {
        alert(translations.messageError);
        return;
    }

    const success = await sendTelegramMessage(data);

    if (success) {
        alert(translations.messageSent);
        e.target.reset();
    } else {
        alert(translations.messageError);
    }
}

// ============= Event Listener'larni qo'shish =============
function setupEventListeners() {
    // Mobil menyu
    domElements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Scroll hodisalari
    window.addEventListener('scroll', handleScroll);

    // "Tepaga" tugmasi
    domElements.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Kontakt forma
    domElements.contactForm.addEventListener('submit', handleFormSubmit);

    // Tashqi click'larni tekshirish
    document.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            domElements.navLinks.classList.remove('active');
            domElements.mobileMenuBtn.innerHTML = ICONS.menu;
            document.body.classList.remove('menu-open');
        }
    });

    // Menyu uchun click event'larni to'xtatish
    domElements.navLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    domElements.mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// ============= Initialization =============
function init() {
    setupEventListeners();
    setupLanguageSwitcher();
    createPortfolioItems();
    createVacancies();
    setupScrollAnimation();
}

// Sahifa yuklanganda ishga tushirish
document.addEventListener('DOMContentLoaded', init);
