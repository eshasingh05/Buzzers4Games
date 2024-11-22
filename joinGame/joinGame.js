const gameCodeInput = document.getElementById("game-code");
const playerNameInput = document.getElementById("player-name");
const joinGameBtn = document.getElementById("join-game");
const startGameBtn = document.getElementById("start-game");
const loginScreen = document.getElementById("login-screen");
const gameScreen = document.getElementById("game-screen");
const playerArea = document.getElementById("player-area");

const gameCodesList = [];


startGameBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  const gameCode = gameCodeInput.value.trim();

  if (!gameCode) {
    alert("Please enter a game code!");
    return;
  } else if (!playerNameInput) {
    alert("Please enter a name!");
    return;
  } else {
    gameCodesList.push(gameCode);
    window.location.href = "https://eshasingh05.github.io/theButtonGame/game.html"; 
  }

});
