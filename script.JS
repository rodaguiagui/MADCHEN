const boton = document.getElementById('enviar');
boton.addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje').value;
    if (mensaje.trim() === "") {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }
    const telefono = "569XXXXXXXX"; // reemplaza con tu número de WhatsApp
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
});
