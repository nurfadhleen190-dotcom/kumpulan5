// MAIN SCRIPT — PCU SELF-RECOVERY
// Compatible with Bootstrap 5 + Fixed Navbar

window.addEventListener('DOMContentLoaded', event => {

    /* ----------------------------------------------------
       1. NAVBAR SHRINK WHEN SCROLL
    ---------------------------------------------------- */
    const navbar = document.querySelector('.navbar');

    const navbarShrink = () => {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    };

    // Initial check
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);


    /* ----------------------------------------------------
       2. BOOTSTRAP SCROLLSPY (Highlight active section)
    ---------------------------------------------------- */
    const mainNav = document.querySelector('.navbar');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '.navbar',
            offset: 80,   // match navbar height
        });
    }


    /* ----------------------------------------------------
       3. AUTO-CLOSE NAVBAR ON MOBILE WHEN LINK CLICKED
    ---------------------------------------------------- */
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const isVisible = window.getComputedStyle(navbarToggler).display !== 'none';
            if (isVisible) {
                navbarToggler.click(); // auto-close
            }
        });
    });

});
