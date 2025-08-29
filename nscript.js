document.addEventListener('DOMContentLoaded', function() {
    
    // --- WhatsApp Form Submission ---
    const form = document.getElementById('whatsapp-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const whatsappNumber = '+919599843861';
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value.trim();
            const gatheringSize = document.getElementById('gathering-size').value.trim();
            const location = document.getElementById('location').value.trim();
            const budget = document.getElementById('budget').value;
            const tellMore = document.getElementById('tell-more').value.trim();

            let message = `Hello, I'd like to get in touch!\n\n`;
            message += `Here are my details:\n`;
            message += `- Name: ${name}\n`;
            message += `- Phone: ${phone}\n`;
            message += `- Date of Function: ${date}\n`;
            message += `- Gathering Size: ${gatheringSize}\n`;
            message += `- Preferred Location: ${location}\n`;
            
            if (budget) {
                message += `- Budget: ${budget}\n\n`;
            }
            if (tellMore) {
                message += `Additional Info: ${tellMore}\n`;
            }

            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            window.open(whatsappURL, '_blank');
        });
    }

    // --- Image Gallery and Lightbox ---
    const galleryImages = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    let currentIndex = 0;

    // Open lightbox on image click
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            currentIndex = index;
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox on click outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                plusSlides(-1);
            } else if (e.key === 'ArrowRight') {
                plusSlides(1);
            } else if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            }
        }
    });

    // Navigate through images
    window.plusSlides = function(n) {
        currentIndex = (currentIndex + n + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
    };

});


// --- Dynamic Navbar on Scroll (kept separate as it's a global event) ---
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navLinks.forEach(link => link.classList.remove('text-white'));
    } else {
        navbar.classList.remove('navbar-scrolled');
        navLinks.forEach(link => link.classList.add('text-white'));
    }
});