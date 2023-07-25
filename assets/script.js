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

document.getElementById('correct').addEventListener('click', correct);
document.getElementById('incorrect').addEventListener('click', incorrect);

let element = document.querySelector('#game-rules'); 
function fadeOut(el) {
   let opacity = 1; // Initial opacity
  let interval = setInterval(function() {
      if (opacity > 0) {
         opacity -= 0.02;
         el.style.opacity = opacity;
      } else {
         clearInterval(interval); // Stop the interval when opacity reaches 0
         el.style.display = 'none'; // Hide the element
      }
   }, 100);
}


function correct() {
    fadeOut(element);
    document.getElementById("navbar").style.visibility = 'visible';
    enableScroll()
}
function incorrect() {
    document.getElementById('text-1').innerText = "Incorrect Try Again";
}
pageLoad()

function pageLoad(){
    document.getElementById("navbar").style.visibility = 'hidden';
    disableScroll()

}



function disableScroll() {
    // Get the current page scroll position in the vertical direction
   let scrollTop =
       window.scrollY || document.documentElement.scrollTop;
           
// Get the current page scroll position in the horizontal direction 
 let scrollLeft =
   window.scrollX || document.documentElement.scrollLeft;
   
  // if any scroll is attempted,
 // set this to the previous value
 window.onscroll = function() {
  window.scrollTo(scrollLeft, scrollTop);
 };
}

function enableScroll() {
    window.onscroll = function() {};
}
