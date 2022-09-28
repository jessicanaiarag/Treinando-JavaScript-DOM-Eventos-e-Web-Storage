// Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('primeiroFilho').nextElementSibling);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const paiOndeVcEsta = document.getElementById('elementoOndeVoceEsta').parentNode;
paiOndeVcEsta.style.backgroundColor = 'blue';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
console.log(document.getElementById('elementoOndeVoceEsta').firstElementChild);
const primeiroFilhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
primeiroFilhoDoFilho.innerText = 'Este é o primeiro filho do filho';

// Acesse o primeiroFilho a partir de pai.
console.log(document.getElementById('pai').firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

// Crie um irmão para elementoOndeVoceEsta.
let pai = document.getElementById('pai');
console.log(pai);
let irmaoOndeVcEsta = document.createElement('section');
irmaoOndeVcEsta.id = 'irmaoOndeVcEsta';
irmaoOndeVcEsta.innerText = 'Irmão do elementoOndeVoceEsta'
pai.appendChild(irmaoOndeVcEsta);
console.log(irmaoOndeVcEsta);

// Crie um filho para elementoOndeVoceEsta.
let ondeVcEsta = document.getElementById('elementoOndeVoceEsta');
let filhoOndeVcEsta = document.createElement('section');
filhoOndeVcEsta.id = 'filhoOndeVcEsta';
filhoOndeVcEsta.innerText = 'filho do elementoOndeVoceEsta';
ondeVcEsta.appendChild(filhoOndeVcEsta);
console.log(filhoOndeVcEsta);

// Crie um filho para primeiroFilhoDoFilho.
let primeirofilhodoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDo1filho = document.createElement('section');
filhoDo1filho.id = 'filhoDo1filho';
filhoDo1filho.innerText = 'filho do primeiroFilho';
primeirofilhodoFilho.appendChild(filhoDo1filho);
console.log(filhoDo1filho);

// A partir desse filho criado, acesse terceiroFilho.
console.log(document.getElementById('filhoDo1filho').parentElement.parentElement.nextElementSibling);

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta
// e primeiroFilhoDoFilho.

const allSessions = document.getElementsByTagName('section');

const paiDoPai = document.getElementById('paiDoPai');

const excluir = [];

for (const element of allSessions) {

  const naoExcluir = ['pai', 'elementoOndeVoceEsta', 'primeiroFilhoDoFilho']

  if (naoExcluir.includes(element.id)) continue;
  
  excluir.push(element);
}

while (excluir.length > 0) {
  excluir.pop().remove();
}

console.log(paiDoPai);

