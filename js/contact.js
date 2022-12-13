function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "vishwakarmabrijesh444@gmail.com",
        Password: "Password",
        To: 'vishwakarmabrijesh444@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
                + "<br> Phone No: " + document.getElementById("phone").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Feedback: " + document.getElementById("message").value
    }).then(
        message => alert("Thanks for your feedback!")
    );
}