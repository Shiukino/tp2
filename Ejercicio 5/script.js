const areaForm = $("areaForm");

areaForm.onsubmit = (event) => {
    event.preventDefault();

    let ladoA = parseFloat($("ladoA").value);
    let ladoB = parseFloat($("ladoB").value);
    let ladoC = parseFloat($("ladoC").value);

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert('Por favor ingrese numeros positivos');
        return;
    }

    let areaTriangulo = (1/2) * ladoB * (ladoA - ladoC);
    let areaRectangulo = ladoB * ladoC;

    let areaTotal = areaTriangulo + areaRectangulo;

    alert(`El área del terreno es: ${areaTotal.toFixed(2)} metros cuadrados.`);
};

function $(elemento) {
    return  document.getElementById(elemento)
};