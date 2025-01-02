<script>
  const collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener('click', () => {
      // Check if the clicked collapsible is already active
      const isActive = collapsible.classList.contains('active');

      // Close all other collapsibles
      collapsibles.forEach((other) => {
        if (other !== collapsible) {
          other.classList.remove('active');
          const content = other.nextElementSibling;
          if (content) {
            content.style.display = 'none';
          }
        }
      });

      // Toggle the clicked collapsible
      if (!isActive) {
        collapsible.classList.add('active');
        const content = collapsible.nextElementSibling;
        if (content) {
          content.style.display = 'block';
        }
      } else {
        // If it was already active, just toggle it closed
        collapsible.classList.remove('active');
        const content = collapsible.nextElementSibling;
        if (content) {
          content.style.display = 'none';
        }
      }
    });
  });
</script>
