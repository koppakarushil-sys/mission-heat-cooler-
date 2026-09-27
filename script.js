function runSimulation() {

  const temperature =
    Number(document.getElementById("temperature").value);

  const hours =
    Number(document.getElementById("hours").value);

  const solar =
    Number(document.getElementById("solar").value);

  const battery =
    Number(document.getElementById("battery").value);

  const modules =
    Number(document.getElementById("modules").value);

  const power =
    Number(document.getElementById("power").value);


  // Solar energy produced during parking
  const solarEnergy = solar * hours;

  // Total Peltier electrical demand
  const peltierDemand = modules * power;

  // Battery + solar energy available
  const availableEnergy = battery + solarEnergy;

  // Estimated time the Peltier system can operate
  const runtime = availableEnergy / peltierDemand;


  // Simple heat-risk indicator
  let risk = "LOW";

  if (temperature >= 42) {
    risk = "HIGH";
  } else if (temperature >= 35) {
    risk = "MEDIUM";
  }


  // Display results
  document.getElementById("generated").textContent =
    Math.round(solarEnergy) + " Wh";

  document.getElementById("available").textContent =
    Math.round(availableEnergy) + " Wh";

  document.getElementById("demand").textContent =
    Math.round(peltierDemand) + " W";

  document.getElementById("runtime").textContent =
    runtime.toFixed(1) + " hours";

  document.getElementById("risk").textContent =
    risk;


  // Mission message
  if (runtime >= hours) {

    document.getElementById("message").textContent =
      "Mission status: the modeled energy budget can support the selected parking period.";

  } else {

    document.getElementById("message").textContent =
      "Mission status: the modeled energy budget is below the selected parking period. Consider increasing solar or battery capacity.";

  }
}


// Run once when the page opens
runSimulation();
