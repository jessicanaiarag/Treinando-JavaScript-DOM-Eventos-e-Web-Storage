const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. 
firstLi.addEventListener('click', addClassLi);
secondLi.addEventListener('click', addClassLi);
thirdLi.addEventListener('click', addClassLi);

function addClassLi() {
  const liList = document.querySelectorAll('.container li');
  for (const li of liList) {
    li.classList.remove('tech');
  }

  this.className = 'tech';
}

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// que possui a classe 'tech';
input.addEventListener('change', addClassInput);

function addClassInput(event) {
  console.log(event);
  const elementChange = document.querySelector('.tech');
  elementChange.innerText = event.target.value;
  // get the element with the className tech
  // set the innerText with the text of event target value
}

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
myWebpage.addEventListener('dblclick', addClassWebPage);

function addClassWebPage() {
  window.location.href = "https://www.youtube.com/c/FreiGilsonSomdoMonteOFICIAL";
}

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', addColorWebPage);
myWebpage.addEventListener('mouseout', removeColorWebPage);

function addColorWebPage() {
  myWebpage.style.color = 'green';
}

function removeColorWebPage() {
  myWebpage.style.color = 'unset';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.