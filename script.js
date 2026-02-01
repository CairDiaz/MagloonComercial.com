const interruptores = document.querySelectorAll('.grupo');
const objetivo = document.querySelector('#objetivo');

interruptores.forEach(el => {
  el.addEventListener('click', () => {
    objetivo.classList.toggle('hide');
  });
});