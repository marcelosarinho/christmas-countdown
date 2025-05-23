function calculateDays() {
  const today = new Date();
  const christmas = new Date(`December 25, ${today.getFullYear()}`);
  const dayInMilliseconds = 24 * 60 * 60 * 1000;

  if (today > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  return Math.ceil((christmas - today) / dayInMilliseconds);
}

document.addEventListener("DOMContentLoaded", () => {
  const days = calculateDays();

  document.getElementById("days").textContent = days;
});