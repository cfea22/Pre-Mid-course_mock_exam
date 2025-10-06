function startExam() {
  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  if (!name || !roll) {
    alert("Please enter your name and roll number!");
    return;
  }
  document.getElementById('student-info').style.display = 'none';
  document.getElementById('exam').style.display = 'block';
  loadQuestions();
}

function loadQuestions() {
  const form = document.getElementById('quiz-form');
  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.innerHTML = `<p>${q.q}</p>` +
      q.options.map((opt, j) =>
        `<label><input type='radio' name='q${i}' value='${j}'> ${opt}</label><br>`
      ).join('');
    form.appendChild(div);
  });
}

function submitExam() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name='q${i}']:checked`);
    if (selected && parseInt(selected.value) === q.answer) score++;
  });
  document.getElementById('exam').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('score').textContent = `${score} / ${questions.length}`;
  window.finalScore = score;
}

function downloadScore() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  doc.text("The Career Foundation Educational Academy", 20, 20);
  doc.text("Pre-Mid Course Mock Test 2025", 20, 30);
  doc.text(`Name: ${name}`, 20, 50);
  doc.text(`Roll No: ${roll}`, 20, 60);
  doc.text(`Score: ${window.finalScore} / 50`, 20, 70);
  doc.text("Instructor: Yumnam Bikramjit Singh (CFEA)", 20, 90);
  doc.save(`${roll}_CFEA_Scorecard.pdf`);
}
