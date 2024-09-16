import { getMessage } from "./message";

export function hello() {
  const app = document.getElementById("app");
  if (!app) {
    throw new Error("Element not found");
  }
  const message = getMessage();
  return app.appendChild(document.createTextNode(message));
}

hello();
