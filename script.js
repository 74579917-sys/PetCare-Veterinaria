// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto 🐾');
    this.reset();
});

// Adoption buttons
document.querySelectorAll('.adopt-button').forEach(button => {
    button.addEventListener('click', function() {
        const petName = this.closest('.pet-card').querySelector('h3').textContent;
        alert(`¡Qué maravilloso! Gracias por tu interés en adoptar a ${petName}. Nos pondremos en contacto contigo pronto 💛🐾`);
    });
});
```

---

// // ## 📁 **Estructura de carpetas recomendada:**
// // ```
// // petcare-veterinaria/
// // │
// // ├── index.html
// // ├── styles.css
// // ├── script.js
// // │
// // └── images/
// //     ├── hero-pets.jpg
// //     ├── max.jpg
// //     ├── luna.jpg
// //     ├── rocky.jpg
// //     ├── blog1.jpg
// //     ├── blog2.jpg
// //     ├── blog3.jpg
// //     ├── consulta.jpg
// //     ├── vacunacion.jpg
// //     ├── peluqueria.jpg
// //     ├── cirugia.jpg
// //     ├── odontologia.jpg
//     └── hospitalizacion.jpg