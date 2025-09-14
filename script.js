// Gelecekteki interaktif özellikler için JavaScript kodu buraya eklenecek.

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = encodeURIComponent(form.name.value.trim());
    var email = encodeURIComponent(form.email.value.trim());
    var message = encodeURIComponent(form.message.value.trim());
    var subject = encodeURIComponent('Website message from ' + (form.name.value.trim() || 'Guest'));
    var body = 'Name: ' + name + '%0D%0AEmail: ' + email + '%0D%0A%0D%0A' + message;
    window.location.href = 'mailto:enescaxmax@gmail.com?subject=' + subject + '&body=' + body;
  });
});
