document.addEventListener("DOMContentLoaded", function() {
    var emailFields = document.querySelectorAll('input[type="email"]');

    emailFields.forEach(function(emailField) {
        console.log('Email field:', emailField);

        emailField.addEventListener("focus", function() {
            console.log('Email field focused');
            emailField.style.backgroundColor = "#ffcccc";  // Change to red color
        });

        emailField.addEventListener("blur", function() {
            console.log('Email field blurred');
            emailField.style.backgroundColor = "";  // Revert to the original color
        });
    });

    if (emailFields.length === 0) {
        console.error("No email input fields found.");
    }
});
