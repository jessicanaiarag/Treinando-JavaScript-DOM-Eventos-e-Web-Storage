// As pessoas devem ter o poder de alterar:

// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as 
// preferências que foram previamente configuradas possam ser aplicadas na tela.

window.onload = function() {
 const inputBackgroundColor = document.getElementsByClassName('background-color');
 console.log(inputBackgroundColor);
  for (const radio of inputBackgroundColor) {
    radio.addEventListener('click', function(e) {
      const p = document.getElementsByTagName('p')[0];
      p.style.backgroundColor = e.target.value;
      localStorage.setItem('background-color', e.target.value);
    });
  }

  const inputTextColor = document.getElementsByClassName('text-color');
  for (const radio of inputTextColor) {
    radio.addEventListener('click', function(e) {
      const p = document.getElementsByTagName('p')[0];
      p.style.color = e.target.value;
      localStorage.setItem('text-color', e.target.value);
    });
  }

 const inputSize = document.getElementById('input-size');
  inputSize.addEventListener('input', function(e) {
    const p = document.getElementsByTagName('p')[0];
    p.style.fontSize = `${inputSize.value}px`;
    localStorage.setItem('size', `${inputSize.value}`);
  });

  const inputFontFamily = document.getElementsByClassName('font-family');
  for (const radio of inputFontFamily) {
    radio.addEventListener('click', function(e) {
      const p = document.getElementsByTagName('p')[0];
      p.style.fontFamily = e.target.value;
      localStorage.setItem('font-family', e.target.value);
    });
  }
  
  let savedBackgroundcolor = localStorage.getItem('background-color');
  const p = document.getElementsByTagName('p')[0];
  p.style.backgroundColor = savedBackgroundcolor;

  let savedTextColor = localStorage.getItem('text-color');
  p.style.color = savedTextColor;

  let savedSize = localStorage.getItem('size');
  inputSize.value = savedSize;
  p.style.fontSize = savedSize + 'px';

  let savedFontFamily = localStorage.getItem('font-family');
  p.style.fontFamily = savedFontFamily;
};
