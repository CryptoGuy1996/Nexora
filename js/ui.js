function updateUI() {

    if (!player) return;

    const points = document.getElementById("points");
    if (points) points.textContent = player.nx_balance;

    const energy = document.getElementById("energy");
    if (energy) energy.textContent = player.energy;

}