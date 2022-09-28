// 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag 
// body;
let body = document.getElementsByTagName('body');
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

// 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);
//console.log(body);

// 🚀 Adicione a tag section com a classe center-content como filho da tag main criada 
// no passo 2;
let sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter);
//console.log(main);

// 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
p.innerText = 'O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM.'
sectionCenter.appendChild(p);
// console.log(sectionCenter);

// 🚀 Adicione a tag section com a classe left-content como filho da tag main criada 
// no passo 2;
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);
// console.log(main);

// 🚀 Adicione a tag section com a classe right-content como filho da tag main criada 
// no passo 2;
let sectionright = document.createElement('section');
sectionright.className = 'right-content';
main.appendChild(sectionright);
// console.log(main);

// 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e 
//classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let smallImage = document.createElement('img');
smallImage.src = 'https://picsum.photos/200';
smallImage.className = 'small-image';
sectionLeft.appendChild(smallImage);
// console.log(sectionLeft);

// 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, 
// um, dois, três, ... como valores da lista. Essa lista deve ser filha do section 
// criado no passo 6;
let list = document.createElement('ul');
let number = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < number.length; i += 1) {
  let li = document.createElement('li');
  li.innerText = number[i];
  list.appendChild(li);
}
sectionright.appendChild(list);
// console.log(sectionright);

// 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
let h3 = '';
for (let i = 0; i < 3; i += 1) {
  h3 = document.createElement('h3');
  main.appendChild(h3);
}
// console.log(main);

// 🚀 Adicione a classe title na tag h1 criada;
h1.className = 'title';
// console.log(h1);

// 🚀 Adicione a classe description nas 3 tags h3 criadas;
let allH3 = document.getElementsByTagName('h3');
for (let i = 0; i < allH3.length; i += 1) {
  let h3 = allH3[i];
  h3.className = 'description';
}
// console.log(allH3);

// 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). 
// Utilize a função .removeChild();
main.removeChild(sectionLeft);
// console.log(main);

// 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). 
// Dica: para centralizar, basta configurar o margin-right: auto da section;
sectionright.style.marginRight = 'auto';
console.log(sectionright);

// 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela 
// que possui a classe center-content) para a cor verde;
sectionCenter.style.backgroundColor = 'green';

// 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
let li = document.getElementsByTagName('li');
let excluir = [];
for (let i = 0; i < li.length; i += 1) {
  let elemento = li[i];
  if (elemento.textContent == 'nove' || elemento.innerText == 'dez') {
    excluir.push(elemento);
  }
} 
for (const elemento of excluir) elemento.remove()
//console.log(li);