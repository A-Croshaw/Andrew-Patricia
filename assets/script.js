

function sendMail(contactForm) {
    emailjs.send("service_dmoely6","andrew",{
        "project_request": contactForm.projectsummary.value,
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
return false;  // To block from loading a new page
}