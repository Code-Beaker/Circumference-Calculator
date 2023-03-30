// CIRLCE PERIMETER CALCULATOR

let radius = window.prompt("Enter radius(cm) ");

radius = Number(radius);

const pi = 3.14;

const perimeter = 2 * pi * radius;

let myText = document.getElementById("demo");

myText.innerHTML = "Perimeter = " + perimeter;
