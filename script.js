// Mostrar alerta al hacer clic en los miembros de la familia
document.addEventListener("DOMContentLoaded", function () {
    const familiares = document.querySelectorAll(".col-3 h3");
  
    familiares.forEach((miembro) => {
      miembro.addEventListener("click", () => {
        alert(`Haz hecho clic en: ${miembro.textContent}`);
      });
    });
  
    // Función de búsqueda simulada
    const searchForm = document.querySelector("form[role='search']");
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = searchForm.querySelector("input[type='search']");
      const searchTerm = input.value.trim().toLowerCase();
  
      if (searchTerm) {
        alert(`Buscando por: ${searchTerm}`);
      } else {
        alert("Por favor escribe algo para buscar.");
      }
    });
  });
  