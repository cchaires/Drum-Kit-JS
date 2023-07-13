const buttons = document.querySelectorAll('.drum');

// Function to play sound based on key press or button click
function playSound(key) {
  const button = document.querySelector('.' + key);
  if (button) {
    const soundSrc = button.dataset.sound;
    new Audio(soundSrc).play();
  }
  button.classList.add('pressed');
  setTimeout(() => button.classList.remove('pressed'), 100);
}

// Attach a click event listener to each button
buttons.forEach(button =>
  button.addEventListener('click', () => {
    const soundSrc = button.dataset.sound;
    new Audio(soundSrc).play();
    button.classList.add('pressed');
    setTimeout(() => button.classList.remove('pressed'), 100);
  })
);

// Event listener for keydown event
document.addEventListener('keydown', event => playSound(event.key));
