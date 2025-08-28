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