document.querySelector('header').style.backgroundColor = 'green';

document.querySelector('.emergency-tasks').style.backgroundColor = 'salmon';

let h3Violet = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < h3Violet.length; i += 1) {
  h3Violet[i].style.backgroundColor = 'violet';
}
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';

let h3black = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < h3black.length; i += 1) {
  h3black[i].style.backgroundColor = 'black';
}
document.querySelector('#footer-container').style.backgroundColor = 'green';




