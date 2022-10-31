/**
 * In the first four rounds, the user can earn up to 25 pts per card.
 *
 * From round 5 to 10, you can earn up to 50 pts per card.
 *
 * Up to 15 round, you can earn up to 100 pts per card.
 */

// Variables
var highScore,
    yourPoints = 0,
    savedPoints = Number(localStorage.getItem(yourPoints));

const card = document.querySelectorAll(".flip-card-click")
const yourPointsHtml = (document.getElementById("yourPoints"));

console.log(`Saved points: ${savedPoints} and yourPoints: ${yourPoints}`);

// On load event
window.addEventListener('load', () => {
  if (savedPoints !== 0) {
    yourPointsHtml.innerHTML = savedPoints;
    console.log(`You have ${savedPoints} saved points`)
  } else {
    
    console.log(`You have not saved points`)
  }
});

// Points storage
if (typeof Storage != "undefined") {
  console.log(Storage);
}

// Reset points
function resetPoints() {
  yourPoints = 0;
}

// Check points
function checkPoints(yourPoints) {
  if (savedPoints !== 0) {
    yourPointsHtml.innerHTML = savedPoints
    console.log(`You win ${savedPoints} points`)
  } else {
    yourPoints += savedPoints;
    console.log(`You have not saved points`)
  }
}

// Add points
console.log(yourPoints);
function addPoints() {
  var rndm = Math.floor(Math.random() * 25);
  yourPoints = rndm;
  localStorage.setItem("yourPoints", yourPoints);

  console.log(yourPoints);
}

// Fade animation
function fade() {
  document.querySelectorAll(".flip-card-click").forEach(function (item) {
    item.classList.toggle("fade");
  });
}

// Remove fade animation
function fadeReset() {
  document.querySelectorAll(".flip-card-click").forEach(function (item) {
    item.classList.remove("fade");
  });
}

// Game core
document.querySelectorAll(".flip-card-click").forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("flipped");
    addPoints();
    fade();
    setTimeout(() => {
      fadeReset();
    }, 600);
  });
});
