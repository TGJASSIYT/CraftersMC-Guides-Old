document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(collapsible => {
        collapsible.addEventListener("click", function() {
            // Check if the clicked collapsible is already active
            const isActive = this.classList.contains("active");

            // Close all other collapsibles
            collapsibles.forEach(other => {
                if (other !== this) {
                    other.classList.remove("active");
                    const content = other.nextElementSibling;
                    if (content) {
                        content.style.display = "none";
                    }
                }
            });

            // If the clicked collapsible was not active, open it
            if (!isActive) {
                this.classList.add("active");
                const content = this.nextElementSibling;
                if (content) {
                    content.style.display = "block";
                }
            } else {
                // If it was already active, just toggle it closed
                this.classList.remove("active");
                const content = this.nextElementSibling;
                if (content) {
                    content.style.display = "none";
                }
            }
        });
    });
});
