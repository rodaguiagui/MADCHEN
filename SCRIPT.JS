document.getElementById("boton-color").addEventListener("click", function() {
    const colores = ["#f0f8ff", "#ffe4e1", "#e6e6fa", "#fafad2", "#d1ffd6"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});
