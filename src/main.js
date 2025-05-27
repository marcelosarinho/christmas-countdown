let isRedAndGreenLightOn = true;
let isSnowVisible = true;

const snowButton = document.querySelector("button");
const snow = document.getElementById("snow");

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

function toggleSnow() {
  if (isSnowVisible) {
    hideSnow();
    return;
  }

  showSnow();
}

function showSnow() {
  isSnowVisible = true;

  snowButton.innerText = "Esconder neve";

  Array.from({ length: 50 }).map((_, i) => {
    const snowflake = document.createElement("i");
    snowflake.classList.add("ph", "ph-snowflake", "text-white", "absolute", "animate-fall");
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.top = `-${Math.random() * 10}%`;
    snowflake.style.fontSize = `${Math.random() * 14 + 12}px`;
    snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;

    snow.appendChild(snowflake);
  });
}

function hideSnow() {
  isSnowVisible = false;

  snowButton.innerText = "Mostrar neve";

  snow.innerHTML = "";
}

function showChristmasRandomFacts() {
  const randomFacts = [
    "Os três países que mais consomem panetones no planeta são, na ordem, Itália, Peru e Brasil.",
    "Durante a Idade Média, o Natal era celebrado durante doze dias, estendendo-se do dia 24 de dezembro (na noite de véspera) até o dia 6 de janeiro.",
    "O panetone é um alimento fortemente relacionado com o Natal, sendo muito consumido na Europa e em diversos países da América. A empresa que mais produz panetones no mundo é uma empresa brasileira: a Bauducco.",
    "O costume da árvore de Natal se popularizou no Ocidente graças à Rainha Vitória, que passou a usar o item como parte da decoração natalina de sua residência em 1834.",
    "Durante o período vitoriano, era comum que as pessoas se presenteassem com cartões de Natal, desejando um “Feliz Natal” para a pessoa que o recebesse.",
    "O Papai Noel moderno é uma figura que surgiu a partir de personagens como São Nicolau, santo católico conhecido por sua generosidade, e por outras figuras, como Odin.",
  ];

  const randomNumber = randomNumberFromInterval(0, randomFacts.length - 1);

  const li = document.createElement("li");
  li.textContent = randomFacts[randomNumber];

  document.getElementById("facts").appendChild(li);
}

function randomNumberFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(() => {
  toggleLights();
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  showSnow();

  const days = calculateDays();

  showChristmasRandomFacts();

  document.getElementById("days").textContent = days;
});

snowButton.addEventListener("click", toggleSnow);
