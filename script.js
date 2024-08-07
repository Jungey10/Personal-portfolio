document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphics Designer.'],
    typeSpeed: 50,
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.secondSection');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.style.opacity = '1';
        } else {
            section.style.opacity = '0.2';
        }
    });
});
