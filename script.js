const questions = [
    {
      question: "A bag has 3 red and 5 blue balls. What's the probability of drawing a red ball?",
      solution: "There are 3 red out of 8 total balls, so the probability is 3/8."
    },
    {
      question: "A die is rolled. What's the probability of getting an even number?",
      solution: "There are 3 even numbers (2, 4, 6) out of 6, so the probability is 3/6 = 1/2."
    },
    {
      question: "Two coins are flipped. What's the probability of getting exactly one head?",
      solution: "HH, HT, TH, TT → 2 outcomes with one head out of 4 = 2/4 = 1/2."
    }
  ];
  
  const container = document.getElementById('questions');
  
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${q.question}</p>
      <button onclick="toggleSolution(${index})">Show Solution</button>
      <div class="solution" id="sol-${index}">${q.solution}</div>
    `;
    container.appendChild(div);
  });
  
  function toggleSolution(index) {
    const sol = document.getElementById(`sol-${index}`);
    const isVisible = sol.style.display === "block";
    sol.style.display = isVisible ? "none" : "block";
  }