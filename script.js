document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hover Effect on Projects
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
        });
        project.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
