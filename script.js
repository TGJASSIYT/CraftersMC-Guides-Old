<script>
  const collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener('click', () => {
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
      const content = collapsible.nextElementSibling;
      const isActive = collapsible.classList.contains('active');
      collapsible.classList.toggle('active', !isActive);
      content.style.display = isActive ? 'none' : 'block';
    });
  });
</script>
