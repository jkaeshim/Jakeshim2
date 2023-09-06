---
toc: True
comments: True
layout: post
title: Calculator
description:
courses: {'csp': {'week': 1}}
type: hacks
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Calculator</title>
<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  #calculator {
    width: 300px;
    margin: 50px auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  input[type="text"] {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  button {
    font-size: 18px;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
  }
</style>
</head>
<body>
<div id="calculator">
  <input type="text" id="result" readonly>
  <button onclick="appendNumber('7')">7</button>
  <button onclick="appendNumber('8')">8</button>
  <button onclick="appendNumber('9')">9</button>
  <button onclick="appendOperator('+')">+</button><br>
  <button onclick="appendNumber('4')">4</button>
  <button onclick="appendNumber('5')">5</button>
  <button onclick="appendNumber('6')">6</button>
  <button onclick="appendOperator('-')">-</button><br>
  <button onclick="appendNumber('1')">1</button>
  <button onclick="appendNumber('2')">2</button>
  <button onclick="appendNumber('3')">3</button>
  <button onclick="appendOperator('*')">*</button><br>
  <button onclick="appendNumber('0')">0</button>
  <button onclick="calculate()">=</button>
  <button onclick="clearResult()">C</button>
  <button onclick="appendOperator('/')">/</button><br>
</div>
<script>
  let currentInput = "";
  function appendNumber(number) {
    currentInput += number;
    document.getElementById("result").value = currentInput;
  }
  function appendOperator(operator) {
    currentInput += operator;
    document.getElementById("result").value = currentInput;
  }
  function calculate() {
    try {
      currentInput = eval(currentInput);
      document.getElementById("result").value = currentInput;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }
  function clearResult() {
    currentInput = "";
    document.getElementById("result").value = "";
  }
</script>
</body>
</html>









