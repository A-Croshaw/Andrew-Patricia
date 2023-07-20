let rsvp

const btn = document.querySelector('.contact-button');
        btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="rsvp"]:checked');
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            rsvp = values;
        });    


function sendMail(contactForm) {
    emailjs.send("service_cfz5krd","wedding",{
        "additional": contactForm.additional.value,
        "from_name": contactForm.guest1.value,
        "from_name2": contactForm.guest2.value,
        "rsvp": rsvp,
        "from_email": contactForm.emailaddress.value
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        window.location = "thankyou.html";
    }, function(error) {
        console.log('FAILED...', error);
    });
return false;  // To block from loading a new page
}
