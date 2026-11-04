document.addEventListener("DOMContentLoaded", () => {
    // 1. Redirección al hacer clic en las tarjetas de cliente
    const cards = document.querySelectorAll(".card-cliente");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const target = card.getAttribute("data-target");
            if (target) {
                window.location.href = target;
            }
        });
    });

    // 2. Filtro de búsqueda en tiempo real (por patente o cliente)
    const inputBuscar = document.getElementById("inputBuscar");
    if (inputBuscar) {
        inputBuscar.addEventListener("keyup", (e) => {
            const texto = e.target.value.toLowerCase();
            
            cards.forEach(card => {
                const contenido = card.textContent.toLowerCase();
                if (contenido.includes(texto)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});