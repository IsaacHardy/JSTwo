var buttonOne = document.querySelector('#calculateBtn');
var topInput = document.querySelector('#num_one');
var botInput = document.querySelector('#num_two');
var answerText = document.querySelector('#answer');



buttonOne.addEventListener('click', function () {
  var calculate = Number(topInput.value) + Number(botInput.value);
  answerText.textContent = calculate;
});

