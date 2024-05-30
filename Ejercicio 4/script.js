document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let peso = parseFloat(document.getElementById('peso').value);
    let estatura = parseFloat(document.getElementById('estatura').value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert('Por favor ingrese numeros positivos');
        return;
    }

    let imc = peso / (estatura * estatura);

    alert('Tu índice de masa corporal (IMC) es: ' + imc.toFixed(2));
});