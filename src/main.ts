import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

if (import.meta.env.VITE_GA_ID) {
  const GA_ID = import.meta.env.VITE_GA_ID;

  // Inject Google Analytics script dynamically
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
}

const app = mount(App, { target: document.getElementById("app") as any });

export default app;
