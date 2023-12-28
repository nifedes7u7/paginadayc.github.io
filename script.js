function saludar() {
    alert("¡Feliz cumpleaños, Dayana!");
}

document.getElementById("redirigirBtn").addEventListener("click", function() {
    
    window.location.href = "/pagina2.html";
});


function redireccionar(url) {
    window.open(url, '_blank');
}

