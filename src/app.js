/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let form = document.getElementById("formulario");
  form.addEventListener("submit", envioFormulario);

  //write your code here

  let numeroTarjeta = document.getElementById("exampleInputCard1");
  let cvc = document.getElementById("exampleInputCVC1");
  let monto = document.getElementById("exampleInputMonto1");
  let primerNombre = document.getElementById("exampleInputPNombre1");
  let segundoNombre = document.getElementById("exampleInputSNombre1");
  let city = document.getElementById("exampleInputSCity1");
  let postal = document.getElementById("exampleInputPostalCdoe1");
  let mensaje = document.getElementById("mensaje");

  let tarjeta = document.getElementById("tarjeta");
  let inlineRadio1 = document.getElementById("inlineRadio1");
  let inlineRadio2 = document.getElementById("inlineRadio2");
  let inlineRadio3 = document.getElementById("inlineRadio3");
  let inlineRadio4 = document.getElementById("inlineRadio4");

  function envioFormulario(event) {
    event.preventDefault();

    if (numeroTarjeta.value === "") {
      numeroTarjeta.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      numeroTarjeta.style.background = "white";
    }

    if (cvc.value === "") {
      cvc.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      cvc.style.background = "white";
    }

    if (monto.value === "") {
      monto.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      monto.style.background = "white";
    }
    if (primerNombre.value === "") {
      primerNombre.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      primerNombre.style.background = "white";
    }
    if (segundoNombre.value === "") {
      segundoNombre.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      segundoNombre.style.background = "white";
    }
    if (city.value === "") {
      city.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      city.style.background = "white";
    }
    if (postal.value === "") {
      postal.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      postal.style.background = "white";
    }
    if (mensaje.value === "") {
      mensaje.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      mensaje.style.background = "white";
    }
    if (
      inlineRadio1.checked ||
      inlineRadio2.checked ||
      inlineRadio3.checked ||
      inlineRadio4.checked
    ) {
      tarjeta.style.background = "gray";
    } else {
      tarjeta.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    }
  }
};
