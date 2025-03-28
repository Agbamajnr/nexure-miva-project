// JavaScript for Smooth Scrolling Navigation
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.top-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent default anchor click behavior

            // Get the target section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
