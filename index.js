const buttons = $('.drum');

// Function to play sound based on key press or button click
function playSound(key) {
  const button = $('.' + key);
  if (button.length > 0) {
    const soundSrc = button.data('sound');
    new Audio(soundSrc).play();
  }
  button.addClass('pressed');
  setTimeout(() => button.removeClass('pressed'), 100);
}

// Attach a click event listener to each button
buttons.on('click', function() {
    const soundSrc = $(this).data('sound');
    new Audio(soundSrc).play();
    $(this).addClass('pressed');
    setTimeout(() => $(this).removeClass('pressed'), 100);
  });

// Event listener for keydown event
$(document).on('keydown', function (event) {
  playSound(event.key);
});