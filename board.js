// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Sidebar Toggle Functionality (for mobile)
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-sidebar");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            sidebar.classList.toggle("show");
        });
    }

    // Set Active Navigation Link
    const navLinks = document.querySelectorAll(".sidebar ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            // Add active class to clicked link
            this.classList.add("active");
        });
    });

    // Marquee Pause on Hover
    const marquee = document.querySelector("marquee");
    if (marquee) {
        marquee.addEventListener("mouseover", function () {
            this.stop();
        });
        marquee.addEventListener("mouseout", function () {
            this.start();
        });
    }

    // Future Feature: Expand Board Member Details (optional)
    const boardMembers = document.querySelectorAll(".board-member");
    boardMembers.forEach(member => {
        member.addEventListener("click", function () {
            alert(`More details about ${this.querySelector("h3").innerText}`);
        });
    });

});
