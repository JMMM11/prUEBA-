const botones = document.querySelectorAll(".btn");
const paneles = document.querySelectorAll(".panel");

function cerrarTodo() {
  paneles.forEach((panel) => panel.classList.remove("abierto"));
  botones.forEach((boton) => boton.setAttribute("aria-expanded", false));
}

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const panel = document.getElementById(boton.getAttribute("aria-controls"));
    cerrarTodo(); // las cards salen en el mismo lugar, así que solo una abierta a la vez
    panel.classList.add("abierto");
    boton.setAttribute("aria-expanded", true);
    panel.querySelector(".cerrar").focus();
  });
});

document.querySelectorAll(".cerrar").forEach((x) => x.addEventListener("click", cerrarTodo));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarTodo();
});
