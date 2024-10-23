document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle the display of the content
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            // Close any open accordions
            document.querySelectorAll('.accordion-content').forEach(item => item.style.display = "none");
            content.style.display = "block";
        }
    });
});