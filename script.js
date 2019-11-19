// Write your JavaScript code here!
window.addEventListener('load', function() {
  let form = document.querySelector('form');
  let pilot = document.querySelector("input[name=pilotName]");
  let coPilot = document.querySelector("input[name=copilotName]");
  let fuel = document.querySelector("input[name=fuelLevel]");
  let cargo = document.querySelector("input[name=cargoMass]");

  let pilotStatus = document.getElementById('pilotStatus');
  let copilotStatus = document.getElementById('copilotStatus');
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus');
  let faultyItems = document.getElementById('faultyItems');
  let launchStatus = document.getElementById('launchStatus');

  form.addEventListener('submit', function() {

    if (pilot.value === "" || coPilot.value === "" || fuel.value === "" || cargo.value === "") {
      alert('All fields are required!');
      event.preventDefault();
    } else if (isNaN(fuel.value) || isNaN(cargo.value) || !isNaN(pilot.value) || !isNaN(coPilot.value)) {
        alert('Must enter valid information for each field!');
        event.preventDefault();
    };



   })
})
