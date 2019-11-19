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

    let goodInput = true;

    if (pilot.value === "" || coPilot.value === "" || fuel.value === "" || cargo.value === "") {
      goodInput = false;
      alert('All fields are required!');
      event.preventDefault();
    } else if (isNaN(fuel.value) || isNaN(cargo.value) || !isNaN(pilot.value) || !isNaN(coPilot.value)) {
        goodInput = false;
        alert('Must enter valid information for each field!');
        event.preventDefault();
    } else {
        goodInput = true
    }

    if (goodInput) {
      pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${coPilot.value} is ready for launch`;

      if (fuel.value < 10000) {
        faultyItems.style.visibility = 'visible';
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
        launchStatus.style.color = 'red';
        event.preventDefault();
      }

      if (cargo.value > 10000) {
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = 'Cargo mass too high for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
        launchStatus.style.color = 'red';
        event.preventDefault();
      }

      if (fuel.value > 10000 && cargo.value < 10000) {
        faultyItems.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle Ready For Launch';
        launchStatus.style.color = 'green';
        event.preventDefault();
      }
    }

  })
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         const destination = document.getElementById("missionTarget");
            destination.innerHTML = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
               <img src="${json[0].image}">
            `;
  })
})
})
