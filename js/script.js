/****************************
 * VARIÁVEIS GLOBAIS
 ****************************/
let quiz = [];
let current = 0;
let timer = null;
let timeLeft = 1800; // 30 minutos
let stats = {};
let selectedAnswer = null;

/****************************
 * INICIAR SIMULADO
 ****************************/
function startSimulado() {
  const subject = document.getElementById("subjectSelect").value;
  if (!subject) {
    alert("Selecione uma matéria!");
    return;
  }

  quiz =
    subject === "ALL"
      ? [...QUESTIONS]
      : subject === "DETRAN"
      ? [...DETRAN_QUESTIONS]
      : subject === "PETROBRAS"
      ? [...PETROBRAS_QUESTIONS]
      : QUESTIONS.filter(q => q.subject === subject);

  quiz.sort(() => Math.random() - 0.5);

  current = 0;
  timeLeft = 1800;
  stats = {};
  selectedAnswer = null;

  quiz.forEach(q => {
    if (!stats[q.subject]) {
      stats[q.subject] = { total: 0, correct: 0, wrong: 0 };
    }
    stats[q.subject].total++;
  });

  document.getElementById("questionCard").classList.remove("hidden");
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("resetBtn").classList.remove("hidden");

  startTimer();
  loadQuestion();
}

/****************************
 * TIMER
 ****************************/
function startTimer() {
  clearInterval(timer);
  updateTimerUI();

  timer = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("⏰ Tempo encerrado!");
      finishSimulado();
      return;
    }

    updateTimerUI();
  }, 1000);
}

function updateTimerUI() {
  document.getElementById("timer").innerText =
    `⏱️ Tempo restante: ${Math.floor(timeLeft / 60)}:${String(
      timeLeft % 60
    ).padStart(2, "0")}`;
}

/****************************
 * CARREGAR QUESTÃO
 ****************************/
function loadQuestion() {
  if (current >= quiz.length) {
    finishSimulado();
    return;
  }

  selectedAnswer = null;

  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("nextBtn").classList.add("hidden");

  const q = quiz[current];
  document.getElementById("questionText").innerText =
    `(${current + 1}/${quiz.length}) ${q.question}`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  Object.entries(q.options).forEach(([key, value]) => {
    const option = document.createElement("div");
    option.className = "option";
    option.innerText = `${key}) ${value}`;
    option.onclick = () => selectOption(option, key);
    optionsDiv.appendChild(option);
  });
}

/****************************
 * SELECIONAR ALTERNATIVA
 ****************************/
function selectOption(element, answer) {
  selectedAnswer = answer;

  document.querySelectorAll(".option").forEach(opt =>
    opt.classList.remove("selected")
  );

  element.classList.add("selected");
}

/****************************
 * RESPONDER QUESTÃO
 ****************************/
function submitAnswer() {
  if (!selectedAnswer) {
    alert("Selecione uma alternativa antes de responder!");
    return;
  }

  const q = quiz[current];
  const feedback = document.getElementById("feedback");
  const options = document.querySelectorAll(".option");
  const nextBtn = document.getElementById("nextBtn");

  feedback.classList.remove("hidden");

  options.forEach(opt => (opt.style.pointerEvents = "none"));

  if (selectedAnswer === q.correct) {
    stats[q.subject].correct++;
    options.forEach(opt => {
      if (opt.innerText.startsWith(q.correct)) {
        opt.classList.add("correct");
      }
    });
    feedback.innerHTML = `✅ <b>Correto!</b><br>${q.justification}`;
  } else {
    stats[q.subject].wrong++;
    options.forEach(opt => {
      if (opt.innerText.startsWith(selectedAnswer)) {
        opt.classList.add("wrong");
      }
      if (opt.innerText.startsWith(q.correct)) {
        opt.classList.add("correct");
      }
    });
    feedback.innerHTML = `
      ❌ <b>Errado!</b><br>
      <b>Resposta correta:</b> ${q.correct}<br>
      ${q.justification}
    `;
  }

  nextBtn.classList.remove("hidden");
}

/****************************
 * PRÓXIMA QUESTÃO
 ****************************/
function nextQuestion() {
  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("nextBtn").classList.add("hidden");

  current++;
  loadQuestion();
}

/****************************
 * PULAR QUESTÃO
 ****************************/
function skipQuestion() {
  current++;
  loadQuestion();
}

/****************************
 * FINALIZAR SIMULADO
 ****************************/
function finishSimulado() {
  clearInterval(timer);
  document.getElementById("questionCard").classList.add("hidden");

  if (typeof renderDashboard === "function") {
    renderDashboard(stats);
  }
}

/****************************
 * REINICIAR
 ****************************/
function resetSimulado() {
  clearInterval(timer);
  location.reload();
}

/****************************
 * PWA - SERVICE WORKER
 ****************************/
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
