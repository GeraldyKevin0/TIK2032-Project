// Animasi Scroll Smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validasi Form Contact
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah pengiriman form langsung

        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            alert('Harap isi semua kolom!');
            return;
        }

        if (!validateEmail(email)) {
            alert('Email tidak valid!');
            return;
        }

        alert('Pesan berhasil dikirim!');
        form.reset(); // Reset form setelah pengiriman
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
}

// Toggle Menu Mobile
const navToggle = document.createElement('div');
navToggle.innerHTML = '&#9776;';
navToggle.style.display = 'none';
navToggle.style.fontSize = '2rem';
navToggle.style.cursor = 'pointer';
navToggle.style.color = '#fff';
navToggle.style.position = 'absolute';
navToggle.style.top = '1rem';
navToggle.style.right = '1rem';

document.querySelector('header').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Responsive Menu
window.addEventListener('resize', () => {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
        navToggle.style.display = 'none';
    } else {
        nav.style.display = 'none';
        navToggle.style.display = 'block';
    }
});

// Inisialisasi Responsive Menu
window.dispatchEvent(new Event('resize'));
