async function minePlayer() {
    console.log("minePlayer called");

    if (!player) return;

    const res = await api(
        SUPABASE.MINE,
        {
            telegram_id: player.telegram_id
        }
    );

    player = res.player;

    updateUI();

}