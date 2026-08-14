async function startGame() {

    await login();

    player = player.player ?? player;

    updateUI();

}

document.addEventListener("DOMContentLoaded", startGame);