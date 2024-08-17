

    (function() {
        emailjs.init({
          publicKey: "bYlDXRKw2Yt6qjyD8",
        });
    })();
    window.onload = function() {
        document.getElementById('contact').addEventListener('submit', function(event) {
            event.preventDefault();
             // Collect form data
          const name = document.getElementById('name').value;
          const user_email = document.getElementById('user_email').value;
          const phone = document.getElementById('phone').value;
          const message = document.getElementById('message').value;

          // Send the email using EmailJS
          emailjs.send('service_trmf7ng', 'template_6qs5y6s',  {
              name: name,
              user_email : user_email,
              phone: phone || '',
              message: message,

          })
          .then(() => {
                  // Hide the form and show the thank you message
                  document.getElementById('contact').style.display = 'none';
                  document.querySelector('.thank-you-message').style.display = 'block';
              }, (error) => {
                  console.log('FAILED...', error);
                  alert('Sorry, something went wrong. Please try again later.');
              });
          });
      };