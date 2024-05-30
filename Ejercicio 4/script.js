const imcForm = $("imcForm");

imcForm.onsubmit = (event) => {
    event.preventDefault();

    let peso = parseFloat($("peso").value);
    let estatura = parseFloat($("estatura").value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert('Por favor ingrese numeros positivos');
        return;
    }

    let imc = peso / (estatura * estatura);

    alert('Tu índice de masa corporal (IMC) es: ' + imc.toFixed(2));
};

function $(elemento) {
    return  document.getElementById(elemento)
};