(function(){
  emailjs.init("sJhhmExUCD81vkjjl"); // Replace with your public key
})();

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_vcyl15m', 'template_ru8o04e', this)
        .then(function() {
          alert('Message sent!');
        }, function(error) {
          alert('Failed to send message: ' + JSON.stringify(error));
        });
    });
  }
});