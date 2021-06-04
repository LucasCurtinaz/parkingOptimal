import React, { useState } from "react";

const Calc = () => {
  const [result, setResult] = useState([]);

  function handleClick() {
    var test = Number(prompt("Digite o número de testes"));
    var i = 0;
    for (i; i < test; i++) {
      var stores = Number(prompt("Digite o número de lojas"));
      var max = 0;
      var min = 100;
      var j = 0;
      for (j; j < stores; j++) {
        var positions = Number(prompt("Digite as posições na Long Street"));
        if (max < positions) {
          max = positions;
        }
        if (min > positions) {
          min = positions;
        }
      }
      setResult((result[i] = (max - min) * 2));
      document.write(`${result[i]} <br />`);
    }
  }

  return (
    <div onClick={handleClick}>
      <h1>Optimal Parking</h1>
      <p>Número de testes: 2</p>
      <p>Número de lojas: 4</p>
      <p>Posições na Long Street: 24, 13, 89, 37</p>
      <p>Número de lojas: 6</p>
      <p>Posições na Long Street: 7, 30, 41, 14, 39, 42</p>
    </div>
  );
};

export default Calc;
