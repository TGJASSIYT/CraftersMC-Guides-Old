document.addEventListener("DOMContentLoaded", () => {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", () => {
      const content = collapsible.nextElementSibling;

      // Toggle active state for button
      collapsible.classList.toggle("active");

      // Toggle expanded state for content
      if (content.classList.contains("expanded")) {
        content.style.maxHeight = null; // Reset to default
        content.classList.remove("expanded");
      } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Set dynamic height
        content.classList.add("expanded");
      }
    });
  });
});
