document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("enviar");
    const mensajeInput = document.getElementById("mensaje");

    boton.addEventListener("click", () => {
        let mensaje = mensajeInput.value.trim();

        if (mensaje === "") {
            alert("Por favor, escribe un mensaje antes de enviarlo.");
            return;
        }

        // ⚠️ Número de WhatsApp correcto
        let telefono = "34609810168";

        // URL de WhatsApp
        let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        // Abrir en nueva pestaña
        window.open(url, "_blank");
    });
});
