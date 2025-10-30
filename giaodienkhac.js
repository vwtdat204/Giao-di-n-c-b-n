<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lắc xúc xắc</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(to bottom right, #eef2ff, #ffffff);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      text-align: center;
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      width: 320px;
    }
    .dice-area {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin: 20px 0;
    }
    .dice {
      width: 80px;
      height: 80px;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    .dice:active {
      transform: scale(0.95);
    }
    button {
      padding: 10px 20px;
      background: #4f46e5;
      border: none;
      color: white;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }
    button:disabled {
      background: gray;
      cursor: not-allowed;
    }
    .person {
      font-size: 60px;
      animation: shake 0.6s ease;
    }
    @keyframes shake {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(10deg); }
      50% { transform: rotate(-10deg); }
      75% { transform: rotate(8deg); }
      100% { transform: rotate(0deg); }
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>🎲 Lắc xúc xắc</h2>
    <p>Nhấn vào xúc xắc hoặc nút để lắc</p>

    <div class="person" id="person">🧑‍🦱</div>

    <div class="dice-area">
      <div class="dice" id="dice1">1</div>
      <div class="dice" id="dice2">1</div>
    </div>

    <button id="rollBtn">Lắc</button>
    <p id="result">Tổng: 2</p>
  </div>

  <script>
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const rollBtn = document.getElementById('rollBtn');
    const result = document.getElementById('result');
    const person = document.getElementById('person');

    function randomDice() {
      return Math.floor(Math.random() * 6) + 1;
    }

    function rollDice() {
      rollBtn.disabled = true;
      person.style.animation = 'shake 0.6s ease';
      let i = 0;
      const interval = setInterval(() => {
        dice1.textContent = randomDice();
        dice2.textContent = randomDice();
        i++;
        if (i > 10) {
          clearInterval(interval);
          const final1 = randomDice();
          const final2 = randomDice();
          dice1.textContent = final1;
          dice2.textContent = final2;
          result.textContent = `Tổng: ${final1 + final2}`;
          rollBtn.disabled = false;
        }
      }, 100);

      setTimeout(() => person.style.animation = '', 800);
    }

    dice1.addEventListener('click', rollDice);
    dice2.addEventListener('click', rollDice);
    rollBtn.addEventListener('click', rollDice);
  </script>
</body>
</html>
