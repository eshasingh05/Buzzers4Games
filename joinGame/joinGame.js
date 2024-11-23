const gameCodeInput = document.getElementById("game-code");
const playerNameInput = document.getElementById("player-name");
const joinGameBtn = document.getElementById("join-game");

import {gameCodesList} from ../startGame/startGame.html

startGameBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  const gameCode = gameCodeInput.value.trim();

  if (!gameCodesList.includes(gameCodeInput)) {
    alert("Please enter a valid game code!");
    return;
  } else if (!playerNameInput) {
    alert("Please enter a name!");
    return;
  } else {
    gameCodesList[players].push(playerNameInput);
    window.location.href = "https://eshasingh05.github.io/theButtonGame/game.html"; 
  }

});
