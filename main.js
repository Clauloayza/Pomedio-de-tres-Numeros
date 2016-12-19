var numero1, numero2, numero3, resultado, promedio;

numero1 = prompt("Por favor, ingresa un número");
numero2 = prompt("Por favor, ingresa un segundo número");
numero3 = prompt("Por favor, ingresa un tercer número");

resultado = parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3);

promedio = resultado/3;

alert(promedio);