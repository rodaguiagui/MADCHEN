document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("enviar");
    const mensajeInput = document.getElementById("mensaje");

    boton.addEventListener("click", () => {
        let mensaje = mensajeInput.value.trim();

        if (mensaje === "") {
            alert("Por favor, escribe un mensaje antes de enviarlo.");
            return;
        }

        // Número de WhatsApp en formato internacional (+34 España)
        let telefono = "34609810168";

        // URL de WhatsApp (funciona en móvil y web)
        let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });
});
