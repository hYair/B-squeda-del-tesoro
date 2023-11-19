// Obtener elementos del DOM
const puzzleContainer = document.getElementById('puzzle-container');
const puzzle = document.getElementById('puzzle');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const hintContainer = document.getElementById('hint-container');
const hint = document.getElementById('hint');
const taskContainer = document.getElementById('task-container');
const task = document.getElementById('task');

// Evento al hacer clic en el botón de enviar
submitButton.addEventListener('click', checkAnswer);

// Función para verificar la respuesta
function checkAnswer() {
  const answer = answerInput.value.toLowerCase();

  // Comprobar si la respuesta es correcta
  if (answer === 'mar') {
    showHint('soy tu consejera que te guiara .');
  } else {
    imposeTask('has 10 sentadillas.');
  }
}

// Función para mostrar  
function showHint(hintText) {
  hint.textContent = hintText;
  hintContainer.style.display = 'block';
}

// Función para imponer un castigo
function imposeTask(taskText) {
  task.textContent = taskText;
  taskContainer.style.display = 'block';
}