let isRedAndGreenLightOn = true;

function calculateDays() {
  const today = new Date();
  const christmas = new Date(`December 25, ${today.getFullYear()}`);
  const dayInMilliseconds = 24 * 60 * 60 * 1000;

  if (today > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  return Math.ceil((christmas - today) / dayInMilliseconds);
}

function toggleLights() {
  isRedAndGreenLightOn = !isRedAndGreenLightOn;

  const lights = {
    redLight: document.getElementById("red-light"),
    greenLight: document.getElementById("green-light"),
    blueLight: document.getElementById("blue-light"),
    yellowLight: document.getElementById("yellow-light"),
  };

  if (isRedAndGreenLightOn) {
    lights.redLight.classList.replace("bg-red-900", "bg-red-500");
    lights.greenLight.classList.replace("bg-green-900", "bg-green-500");
    lights.blueLight.classList.replace("bg-blue-500", "bg-blue-900");
    lights.yellowLight.classList.replace("bg-yellow-500", "bg-yellow-900");

    return;
  }

  lights.blueLight.classList.replace("bg-blue-900", "bg-blue-500");
  lights.yellowLight.classList.replace("bg-yellow-900", "bg-yellow-500");
  lights.redLight.classList.replace("bg-red-500", "bg-red-900");
  lights.greenLight.classList.replace("bg-green-500", "bg-green-900");
}

document.addEventListener("DOMContentLoaded", () => {
  const days = calculateDays();

  document.getElementById("days").textContent = days;
});

setInterval(() => {
  toggleLights();
}, 1000);