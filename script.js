document.addEventListener("DOMContentLoaded", function() {
    var backToTopLinks = document.querySelectorAll(".back-to-top a");

    backToTopLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
