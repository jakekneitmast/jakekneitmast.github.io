// Configuration
const defaultConfig = {
  course_title: "Scam Safety Training",
  welcome_message: "This course will teach you how to recognize and avoid scams. Take your time with each section.",
  primary_color: "#38a169",
  secondary_color: "#3182ce",
  background_color: "#1a365d",
  surface_color: "#ffffff",
  text_color: "#2d3748",
  font_family: "Open Sans",
  font_size: 18
};

let currentConfig = { ...defaultConfig };
let completedModules = new Map();
let currentTextSize = 1;
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;

// Module Data (paste your full modules array here)
const modules = [
  // ... your modules array with payments, phone-calls, etc. ...
  // Keep everything exactly as it was
];

// ────────────────────────────────────────────────
// LocalStorage Progress (recommended for GitHub Pages)
// ────────────────────────────────────────────────

function loadProgress() {
  const saved = localStorage.getItem('scamTrainingProgress');
  if (saved) {
    JSON.parse(saved).forEach(r => {
      completedModules.set(r.module_id, {
        completed: r.completed,
        quiz_score: r.quiz_score
      });
    });
  }
  renderModules();
  updateProgress();
}

function saveProgress() {
  const data = Array.from(completedModules.entries()).map(([module_id, d]) => ({
    module_id,
    completed: d.completed,
    quiz_score: d.quiz_score
  }));
  localStorage.setItem('scamTrainingProgress', JSON.stringify(data));
}

// ────────────────────────────────────────────────
// Your existing functions go here (paste the rest)
// ────────────────────────────────────────────────

// speakText, stopSpeaking, toggleTextSize, openModule, closeModule,
// startQuiz, renderQuizQuestion, selectAnswer, nextQuestion,
// completeModule (update with saveProgress()), resetCourse (add localStorage.removeItem),
// chatbot functions, password generator, etc.

// Example: update completeModule to use localStorage
async function completeModule() {
  // ... calculate score ...
  completedModules.set(moduleId, { completed: true, quiz_score: scorePercentage });
  saveProgress();
  renderModules();
  updateProgress();
  // ... show results ...
}

// Initialize
function initApp() {
  loadProgress();
  // applyConfig() if you still want it, otherwise remove
}

window.addEventListener('DOMContentLoaded', initApp);