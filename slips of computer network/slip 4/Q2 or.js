/*  Write a JavaScript function to validate email-id using  
 regular expression.*/
 function validateEmail(email) {
    // Regular expression for a basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
}

// Example usage:
var emailToValidate = "example@example.com";
if (validateEmail(emailToValidate)) {
    console.log("Email is valid");
} else {
    console.log("Email is not valid");
}
