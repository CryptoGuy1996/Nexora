async function login() {

    tg = window.Telegram.WebApp;

    tg.ready();

    tg.expand();

  player = await api(SUPABASE.ME, {
    telegram_id: player.player.telegram_id
});

console.log("PLAYER", player);

}