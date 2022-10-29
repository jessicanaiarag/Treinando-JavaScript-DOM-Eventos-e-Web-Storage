function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function colorPalette() {
  const titleColorPalette = document.getElementById('color-palette');
  const arrayColors = [];
  for (let i = 0; i < 3; i += 1) {
    const newColor = generateColor();
    arrayColors.push(newColor);
  }
  const newArrayColors = ['black', ...arrayColors];
  for (let i = 0; i < newArrayColors.length; i += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.style.backgroundColor = newArrayColors[i];
    if (i === 0) {
      divColor.classList.add('selected');
    }
    titleColorPalette.appendChild(divColor);
  }
}

colorPalette();

function selectPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.addEventListener('click', () => {
      const colorSelected = document.querySelector('.selected');
      pixel.style.backgroundColor = colorSelected.style.backgroundColor;
    });
  }
}

function createTable(number) {
  const table = document.getElementById('pixel-board');
  table.innerHTML = '';
  let value = number;
  if (number < 5) {
    value = 5;
  } else if (number > 50) {
    value = 50;
  }
  for (let ILinha = 0; ILinha < value; ILinha += 1) {
    const line = document.createElement('tr');
    for (let IColuna = 0; IColuna < value; IColuna += 1) {
      const col = document.createElement('td');
      col.className = 'pixel';
      line.appendChild(col);
    }
    table.appendChild(line);
  }
  selectPixel();
}

createTable(5);

function selectedColor(event) {
  const colorsSelected = document.querySelectorAll('.selected');
  for (let i = 0; i < colorsSelected.length; i += 1) {
    const color = colorsSelected[i];
    color.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function selectColor() {
  const colorPallete = document.querySelectorAll('.color');
  for (let index = 0; index < colorPallete.length; index += 1) {
    const color = colorPallete[index];
    color.addEventListener('click', selectedColor);
  }
}

selectColor();

function clearPixels() {
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  const divButton = document.getElementById('div-button');
  divButton.appendChild(button);
  button.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      const pixel = pixels[index];
      pixel.style.backgroundColor = 'white';
    }
  });
}
clearPixels();

function createTablePixels() {
  const input = document.createElement('input');
  input.id = 'board-size';
  input.type = 'number';
  input.min = '1';
  const button = document.createElement('button');
  button.id = 'generate-board';
  button.innerText = 'VQV';
  const divInput = document.getElementById('div-input');
  divInput.appendChild(input);
  divInput.appendChild(button);
  button.addEventListener('click', () => {
    const getInput = document.getElementById('board-size');
    if (!getInput.value || getInput.value <= 0) {
      alert('Board inválido!');
      return;
    }
    createTable(getInput.value);
  });
}

createTablePixels();
