document.addEventListener("DOMContentLoaded", () => {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", () => {
      const content = collapsible.nextElementSibling;

      // Toggle active state for button
      collapsible.classList.toggle("active");

      // Toggle expanded state for content
      if (content.classList.contains("expanded")) {
        content.style.maxHeight = "0"; // Set to 0 for collapsing
        content.classList.remove("expanded");
        collapsible.setAttribute("aria-expanded", "false"); // Update aria attribute
      } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Set dynamic height
        content.classList.add("expanded");
        collapsible.setAttribute("aria-expanded", "true"); // Update aria attribute
      }
    });
  });
});
