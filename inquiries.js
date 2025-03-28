// FAQ Toggle Functionality
document.querySelectorAll('.faq .question').forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        const parentFaq = this.parentElement;

        // Close all other open FAQs
        document.querySelectorAll('.faq .answer').forEach(ans => {
            if (ans !== answer) {
                ans.style.maxHeight = null;
                ans.parentElement.classList.remove('open');
            }
        });

        // Toggle visibility with smooth animation
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            parentFaq.classList.remove('open');
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            parentFaq.classList.add('open');
        }
    });
});

// Form Submission (For Inquiry and Appointment Forms)
function handleFormSubmission(form, message) {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Display a confirmation message
        const confirmationSection = document.getElementById('confirmation');
        const confirmationMessage = document.getElementById('confirmation-message');

        confirmationMessage.textContent = message;
        confirmationSection.style.display = 'block';

        // Reset form fields after submission
        form.reset();

        // Hide confirmation message after a few seconds
        setTimeout(() => {
            confirmationSection.style.display = 'none';
        }, 5000);
    });
}

// Attach event listeners if forms exist
const inquiryForm = document.getElementById('inquiry-form');
const appointmentForm = document.getElementById('appointment-form');

if (inquiryForm) handleFormSubmission(inquiryForm, 'Inquiry Submitted Successfully!');
if (appointmentForm) handleFormSubmission(appointmentForm, 'Appointment Booked Successfully!');
