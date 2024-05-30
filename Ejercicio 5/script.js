document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let ladoA = parseFloat(document.getElementById('ladoA').value);
    let ladoB = parseFloat(document.getElementById('ladoB').value);
    let ladoC = parseFloat(document.getElementById('ladoC').value);

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert('Por favor ingrese numeros positivos');
        return;
    }

    let areaTriangulo = (1/2) * ladoB * (ladoA - ladoC);
    let areaRectangulo = ladoB * ladoC;

    let areaTotal = areaTriangulo + areaRectangulo;

    alert(`El área del terreno es: ${areaTotal.toFixed(2)} metros cuadrados.`);
});