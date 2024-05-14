import { registar } from "./session.js";

const render = () => {
  const registro = document.querySelector("#registro");

  registro.addEventListener("submit", (e) => {
    e.preventDefault();

    const correo = e.target.correo.value;
    const contrasena = e.target.contrasena.value;
    const confirmarContrasena = e.target.confirmarContrasena.value;

    try {
      registar(correo, contrasena, confirmarContrasena);
      alert("Usuario registrado exitosamente");
      window.location.href = "./index.html";
    } catch (error) {
      alert(error.message);
    }
  });
};

document.addEventListener("DOMContentLoaded", render);
