document.addEventListener("DOMContentLoaded", function() {
    var emailField = document.getElementById('113283944');
    
    console.log('Email field:', emailField);
    
    if (emailField) {
        emailField.addEventListener("focus", function() {
            console.log('Email field focused');
            emailField.style.backgroundColor = "#e0f7fa";  // Change to your desired color
        });

        emailField.addEventListener("blur", function() {
            console.log('Email field blurred');
            emailField.style.backgroundColor = "";  // Revert to the original color
        });
    } else {
        console.error("No email input field found with the ID 113283944.");
    }
});
