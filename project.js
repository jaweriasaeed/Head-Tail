function tossCoin() {
    const outcomes = ["Heads", "Tails"];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = outcomes[randomIndex];
  }