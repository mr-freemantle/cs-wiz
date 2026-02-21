// Handles filtering of topic cards by component

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("componentDropdown");
  if (!dropdown) return;

  const topicCards = document.querySelectorAll(".topic-card");

  dropdown.addEventListener("change", function () {
    const selected = dropdown.value;
    topicCards.forEach((card) => {
      // Each card should have a data-component attribute
      if (selected === "all" || card.dataset.component === selected) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
