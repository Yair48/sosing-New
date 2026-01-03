document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000 });

    // Accordion
    const accordionButtons = document.querySelectorAll('.accordion-item button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.classList.toggle('active');
        });
    });

    // Form Submission (模拟; replace with actual backend)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensaje enviado con éxito!');
        contactForm.reset();
    });

    const leadForm = document.getElementById('lead-form');
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Checklist enviada a tu email!');
        leadForm.reset();
        document.getElementById('exit-popup').style.display = 'none';
    });

    // Exit-Intent Popup
    let mouseLeft = false;
    document.addEventListener('mouseleave', () => {
        if (!mouseLeft) {
            document.getElementById('exit-popup').style.display = 'flex';
            mouseLeft = true;
        }
    });

    document.getElementById('close-popup').addEventListener('click', () => {
        document.getElementById('exit-popup').style.display = 'none';
    });
});
