document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var salarioAnual = parseFloat(document.getElementById('salarioAnual').value);
    var pisoSalarial = parseFloat(document.getElementById('pisoSalarial').value);
    var salarioMensal = salarioAnual / 12;
  
    if (salarioMensal >= pisoSalarial) {
      alert('O funcionário recebe de acordo com o piso salarial.');
    } else {
      alert('O funcionário recebe abaixo do piso salarial.');
    }
  
    document.getElementById('salarioMensal').innerHTML = 'Salário mensal do funcionário: ' + salarioMensal.toFixed(2);
  });
  