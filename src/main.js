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
  "https://umxypzffelmhrygvlznp.supabase.co/functions/v1/login",
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
console.log(data);

document.body.innerHTML =
  "<h1>Nexora</h1><pre>" +
  JSON.stringify(data, null, 2) +
  "</pre>";
}

login();