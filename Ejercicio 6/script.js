function validarFormulario() {
    
    let nombre = $("nombre").value;
    let apellido = $("apellido").value;
    let edad = parseInt($("edad").value);
    let altura = parseInt($("altura").value);
    let email = $("email").value;
    let mensaje = $("mensaje");
    let valido = true;

    if (nombre === "" || apellido === "" || nombre.length > 50 || apellido.length > 50) {
        mensaje.textContent = "El nombre y apellido no pueden estar vacios y deben tener máximo 50 caracteres";
        valido = false;
    }
    
    if (isNaN(edad) || edad < 0 || edad < 18) {
        mensaje.textContent = "La edad no puede ser negativa y debe ser mayor o igual a 18 años";
        valido = false;
    }
    
    if (isNaN(altura) || altura < 0 || altura > 230) {
        mensaje.textContent = "La altura debe ser un valor positivo y no puede ser mayor a 230 cm";
        valido = false;
    }
    
    if (email === "" || !email.includes("@")) {
        mensaje.textContent = "El correo electrónico no puede estar vacio y debe incluir @";
        valido = false;
    }

    if (valido) {
        mensaje.textContent = "¡Formulario valido!";
        mensaje.style.color = "green";
    } else {
        mensaje.style.color = "red";
    }
};

function $(elemento) {
    return  document.getElementById(elemento)
};