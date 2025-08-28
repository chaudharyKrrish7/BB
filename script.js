window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
      // Change the nav-link color
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.classList.remove('text-white');
      });
    } else {
      navbar.classList.remove('navbar-scrolled');
      // Change the nav-link color back to white
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.classList.add('text-white');
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('whatsapp-form');
    
    // Check if the form element exists before adding the event listener
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Your target WhatsApp number (include country code, without '+' or '00')
            // **IMPORTANT: REPLACE '919876543210' with your actual number**
            const whatsappNumber = '+919599843861'; 

            // Get form data using the IDs from your HTML
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value.trim();
            const gatheringSize = document.getElementById('gathering-size').value.trim();
            const location = document.getElementById('location').value.trim();
            const budget = document.getElementById('budget').value;
            const tellMore = document.getElementById('tell-more').value.trim();

            // Construct the message text
            let message = `Hello, I would like to get in touch!\n\n`;
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

            // URL-encode the message
            const encodedMessage = encodeURIComponent(message);

            // Create the WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Redirect the user to WhatsApp in a new tab
            window.open(whatsappURL, '_blank');
        });
    }

    // Existing Navbar Scrolled Logic (from your provided code)
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNavbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});