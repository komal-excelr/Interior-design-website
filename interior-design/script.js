     // Toggle mobile dropdown menu
        document.getElementById('menuBtn').addEventListener('click', function() {
            document.getElementById('dropdownMenu').classList.toggle('open');
        });
        
        // Close dropdown when clicking outside or on a link
        document.addEventListener('click', function(event) {
            const dropdownMenu = document.getElementById('dropdownMenu');
            const menuBtn = document.getElementById('menuBtn');
            
            if (!dropdownMenu.contains(event.target) && !menuBtn.contains(event.target)) {
                dropdownMenu.classList.remove('open');
            }
        });
    document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Get input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const projectDetails = document.getElementById('projectDetails').value.trim();
    
    // Simple validation messages
    let messages = [];

    // Validate First Name
    if (!firstName.match(/^[A-Za-z\s\-']{1,40}$/)) {
        messages.push("First name is invalid. It should be 1-40 characters and only letters, hyphens, or apostrophes.");
    }

    // Validate Last Name
    if (!lastName.match(/^[A-Za-z\s\-']{1,40}$/)) {
        messages.push("Last name is invalid. It should be 1-40 characters and only letters, hyphens, or apostrophes.");
    }

    // Validate Email
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        messages.push("Email address is invalid. Please enter a valid email address.");
    }

    // Validate Phone
    if (phone && !phone.match(/^\+?[\d\s\-]{7,15}$/)) {
        messages.push("Phone number is invalid. It should be 7 to 15 digits with an optional + sign and spaces or dashes allowed.");
    }

    // Validate Project Details
    if (projectDetails.length < 5) {
        messages.push("Project details are too short. Please provide at least 5 characters.");
    }

    // If there are errors, show them
    if (messages.length > 0) {
        alert(messages.join("\n"));
    } else {
        // If all inputs are valid, you may proceed with form submission
        alert("Form submitted successfully!"); // Replace this with form submission logic as needed
        // You can use AJAX to submit the form data here if needed
    }
});
