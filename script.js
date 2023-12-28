function saludar() {
    alert("¡Feliz cumpleaños, Dayana!");
}

document.getElementById("redirigirBtn").addEventListener("click", function() {
    
    window.location.href = "/pagina2.html";
});


function redireccionar(url) {
    window.open(url, '_blank');
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Función para cerrar el pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Mostrar el pop-up después de cargar la página (puedes ajustar el tiempo según tus necesidades)
setTimeout(showPopup, 2000);
