import "./style.css";

const tg = window.Telegram?.WebApp;

async function login() {
  if (!tg) {
    console.log("Telegram WebApp not found");
    return;
  }

  tg.ready();
  tg.expand();

  const response = await fetch(
    "http://127.0.0.1:54321/functions/v1/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        initData: tg.initData,
      }),
    }
  );

const data = await response.json();

document.body.innerHTML =
  "<h1>Nexora</h1><pre>" +
  JSON.stringify(data, null, 2) +
  "</pre>";
}

login();