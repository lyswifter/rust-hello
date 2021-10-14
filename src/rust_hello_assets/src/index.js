import { rust_hello } from "../../declarations/rust_hello";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with rust_hello actor, calling the greet method
  const greeting = await rust_hello.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
