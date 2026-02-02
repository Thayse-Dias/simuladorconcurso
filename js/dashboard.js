const SUBJECT_COLORS = {
  "Lógica e Probabilidade": "#6366f1",
  "Matemática": "#22c55e",
  "Português": "#eab308",
  "Informática": "#0ea5e9",
  "Legislação de Trânsito": "#f97316",
  "Direito Administrativo": "#ef4444"
};

let chartInstance = null;

/**
 * Renderiza dashboard final
 */
function renderDashboard(stats) {
  saveHistory(stats);

  const dashboard = document.getElementById("dashboard");
  dashboard.classList.remove("hidden");

  const labels = Object.keys(stats);
  const errorsData = labels.map(s => stats[s].wrong);
  const correctData = labels.map(s => stats[s].correct);
  const colors = labels.map(s => SUBJECT_COLORS[s] || "#94a3b8");

  const ctx = document.getElementById("errorChart").getContext("2d");

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Acertos",
          data: correctData,
          backgroundColor: colors.map(c => c + "AA")
        },
        {
          label: "Erros",
          data: errorsData,
          backgroundColor: colors.map(c => c + "FF")
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        tooltip: {
          callbacks: {
            label: ctx =>
              `${ctx.dataset.label}: ${ctx.parsed.y}`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

/**
 * Salva histórico no localStorage
 */
function saveHistory(stats) {
  const history = JSON.parse(localStorage.getItem("simuladoHistory")) || [];

  history.push({
    date: new Date().toISOString(),
    stats
  });

  localStorage.setItem("simuladoHistory", JSON.stringify(history));
}

/**
 * Recupera histórico (caso queira usar depois)
 */
function getHistory() {
  return JSON.parse(localStorage.getItem("simuladoHistory")) || [];
}
