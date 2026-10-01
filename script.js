document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Triggers when the section is halfway through the viewport
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to the currently visible section's link
                const activeId = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-links a[href="#${activeId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
});