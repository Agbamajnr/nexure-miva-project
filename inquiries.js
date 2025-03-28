// FAQ Toggle Functionality
document.querySelectorAll('.faq .question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const parentFaq = this.parentElement;

        // Toggle visibility of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            parentFaq.classList.remove('open');
        } else {
            answer.style.display = 'block';
            parentFaq.classList.add('open');
        }
    });
});

// Form Submission (For Inquiry and Appointment Forms)
document.getElementById('inquiry-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    const formData = new FormData(this);
    let message = 'Inquiry Submitted Successfully!';

    // Display a confirmation message
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('confirmation-message').textContent = message;
});

document.getElementById('appointment-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    const formData = new FormData(this);
    let message = 'Appointment Booked Successfully!';

    // Display a confirmation message
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('confirmation-message').textContent = message;
});
