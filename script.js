document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

        // recebe os numeros digitados pelo usuario
    let numeroDigitados = document.getElementById('lista').value;
    let listaNumeros = numeroDigitados.split('').map(Number);

     // Implementação do Selection Sort
    for (let i = 0; i < listaNumeros.length - 1; i++) {
        let minimo = i;
        for (let j = i + 1; j < listaNumeros.length; j++) {
            if (listaNumeros[j] < listaNumeros[minimo]) {
                minimo  = j; 
            }
        }
        // Troca os elementos se necessário
        if (listaNumeros[i] > listaNumeros[minimo]) {
            let aux = listaNumeros[i];
            listaNumeros[i]= listaNumeros[minimo];
            listaNumeros[minimo] = aux;
        }
    }
    // Exibe o resultado
    let resultadoSaida = document.getElementById('resultado');
    resultadoSaida.textContent = listaNumeros.join('  ');
});


