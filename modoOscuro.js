const btnDark = document.querySelector("#btnDark");
const root = document.documentElement;

function activarModoOscuro() {
    
    root.style.setProperty("background-color", "rgba(17, 17, 17, 0.9)");
    root.style.setProperty("color", "white"); 
    root.style.setProperty("border", "1px solid #fff"); 

 
    const formElements = document.querySelectorAll("form, .form-control");
    formElements.forEach(el => {
        el.style.backgroundColor = "var(--Negro)"; 
        el.style.color = "white"; 
        el.style.border = "1px solid white"; 
    });

  
    btnDark.textContent = "Light";
    btnDark.style.backgroundColor = "var(--Verde)"; 
    btnDark.style.color = "var(--Negro)"; 
    localStorage.setItem("modoOscuro", "Activado");
}

function desactivarModoOscuro() {
    
    root.style.setProperty("background-color", "white");
    root.style.setProperty("color", "var(--Negro)"); 
    root.style.setProperty("border", "1px solid #000"); 

    
    const formElements = document.querySelectorAll("form, .form-control");
    formElements.forEach(el => {
        el.style.backgroundColor = "white"; 
        el.style.color = "var(--Negro)"; 
        el.style.border = "1px solid var(--Gris)"; 
    });

    btnDark.textContent = "Dark";
    btnDark.style.backgroundColor = "var(--Verde)"; 
    btnDark.style.color = "var(--Negro)"; 
    localStorage.setItem("modoOscuro", "Desactivado");
}

const estadoModoOscuro = localStorage.getItem("modoOscuro");

if (estadoModoOscuro === "Activado") {
    activarModoOscuro();
} else {
    desactivarModoOscuro();
}

btnDark.addEventListener("click", () => {
    const estadoModoOscuro = localStorage.getItem("modoOscuro");
    if (estadoModoOscuro === "Desactivado") {
        activarModoOscuro();
    } else {
        desactivarModoOscuro();
    }
});
