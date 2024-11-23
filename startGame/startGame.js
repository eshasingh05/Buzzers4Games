const gameCodeInput = document.getElementById("game-code");
const playerNameInput = document.getElementById("player-name");
const startGameBtn = document.getElementById("start-game");

const gameCodesList = [
];


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
    gameCodesList.push({code: gameCodeInput, players: [playernameInput]})
    export const gameCodesList;
    window.location.href = "https://eshasingh05.github.io/Buzzers4Games/chooseSound/chooseSound.html"; 

  }
});
