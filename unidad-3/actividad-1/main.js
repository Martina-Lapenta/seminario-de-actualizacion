import { CustomCalculator } from '../calculadora/Calculadora.js';

function main() {
  document.body.appendChild(new CustomCalculator());
}

window.onload = main;
