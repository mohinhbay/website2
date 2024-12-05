document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Thank you for your message!");
        this.reset();  // Reset form after submission
    }
});
