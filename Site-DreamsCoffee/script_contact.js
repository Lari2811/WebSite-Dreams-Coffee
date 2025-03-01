//Contact

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();
    const gdpr = document.getElementById("gdpr").checked;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;
  
    if (firstName === "" || lastName === "") {
        alert("Please provide your full name.");
        return;
    }
  
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
  
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }
  
    if (subject === "") {
        alert("Please select a subject.");
        return;
    }
  
    if (message === "") {
        alert("Message cannot be empty.");
        return;
    }
  
    if (!gdpr) {
        alert("You must agree to the Privacy Policy.");
        return;
    }
  
    alert("Thank you for your message, " + firstName + "!");
    document.getElementById("contactForm").reset();
  });
  