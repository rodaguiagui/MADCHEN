const boton = document.getElementById("enviar");
const input = document.getElementById("mensaje");

// Número de WhatsApp (sin + ni espacios)
const numeroWhatsApp = "34609810168";

boton.addEventListener("click", () => {
    let mensaje = input.value.trim();
    if (!mensaje) {
        mensaje = "Hola, somos las hermanas chilenoalemanas"; // mensaje por defecto
    }
    mensaje = encodeURIComponent(mensaje);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, "_blank"); // abre WhatsApp en nueva pestaña
});
