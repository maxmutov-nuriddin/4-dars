var elBody = document.querySelector('body');
var elBtn = document.querySelector('button');

elBtn.addEventListener('click', function () {
  elBody.classList.toggle('dark');
});