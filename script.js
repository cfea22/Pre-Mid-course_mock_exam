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
function sendToSheet(name, roll, score) {
  const scriptURL = "https://script.google.com/macros/s/AKfycbyLFlR4UNjavRDcd7rAFFOBwtC2JfN7mWNaEA_WZHwqOaXrOGaFZnegi8xsbBR1xuBx/exec"; // your Apps Script URL

  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, roll, score })
  })
  .then(() => console.log("✅ Result sent to Google Sheet"))
  .catch(err => console.error("❌ Error sending data", err));
}
function downloadScore() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const score = window.finalScore;

  // 🎓 Header branding
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("The Career Foundation Educational Academy", 20, 20);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Napet Palli, Imphal East - 795010", 20, 28);
  doc.text("Registration No. 425 under I.T Act 1889 & Registration Act 1908", 20, 35);
  doc.line(20, 38, 190, 38);

  // 🧾 Exam details
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Pre-Mid Course Mock Test 2025", 20, 50);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("6 Months Primary Teachers Training Course", 20, 58);
  doc.line(20, 60, 190, 60);

  // 🧍 Student Information
  doc.setFontSize(12);
  doc.text(`Full Name: ${name}`, 20, 75);
  doc.text(`Roll Number: ${roll}`, 20, 83);
  doc.text(`Total Marks: 50`, 20, 91);
  doc.text(`Marks Obtained: ${score}`, 20, 99);

  // 💬 Professional remark
  let remark = "";
  if (score >= 45) remark = "Excellent performance. Keep it up!";
  else if (score >= 35) remark = "Good work. You can do even better!";
  else remark = "Needs improvement. Review your notes regularly.";

  doc.setFont("helvetica", "italic");
  doc.text(`Remarks: ${remark}`, 20, 115);

  // 🪶 Footer line (branded and professional)
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.line(20, 270, 190, 270);
  doc.text(
    "Keep this scorecard for your future reference.",
    20,
    278
  );
  doc.setFont("helvetica", "italic");
  doc.text(
    "Powered by Yumnam Bikramjit Singh, Computer Instructor - CFEA",
    20,
    285
  );

  // 🖨️ Save file
  const filename = `${roll}_CFEA_Scorecard.pdf`;
  doc.save(filename);
}
