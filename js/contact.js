// Function to simulate sending the contact message
function sendContactMessage(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Display the loader modal
    toggleLoader(true);

    // Simulate a delay for sending the message
    setTimeout(() => {
        // Hide the loader modal after 2 seconds
        toggleLoader(false);

        // Display success message (alert for simplicity)
        alert("Your message has been sent successfully!");

        // Clear the form
        document.getElementById('contactForm').reset();
    }, 2000); // 2-second delay
}

// Attach the sendContactMessage function to the form submit event
document.getElementById('contactForm').addEventListener('submit', sendContactMessage);
