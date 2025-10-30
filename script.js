function play(choice) {
  const dice = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];
  
  const sum = dice.reduce((a, b) => a + b, 0);
  const result = (sum >= 11) ? 'tai' : 'xiu';

  document.getElementById('dice1').textContent = '🎲' + dice[0];
  document.getElementById('dice2').textContent = '🎲' + dice[1];
  document.getElementById('dice3').textContent = '🎲' + dice[2];

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Tổng: ${sum} (${result.toUpperCase()})<br>`;

  if (choice === result) {
    resultDiv.innerHTML += `<span style="color:lime">Bạn thắng!</span>`;
  } else {
    resultDiv.innerHTML += `<span style="color:red">Bạn thua!</span>`;
  }
}
