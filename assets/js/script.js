
    document.addEventListener('DOMContentLoaded', function() {
        var readMoreLinks = document.querySelectorAll('.read-more');
        readMoreLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var content = this.previousElementSibling;
                content.classList.toggle('show');
                this.textContent = content.classList.contains('show') ? 'Read Less' : 'Read More';
            });
        });
    });
