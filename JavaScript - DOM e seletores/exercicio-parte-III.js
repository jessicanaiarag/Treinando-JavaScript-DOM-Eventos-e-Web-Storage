// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma 
// descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto 
// e sim realizando o exercício)
function getByTagP () {
  const tagP = document.getElementsByTagName('p')[1];
  tagP.innerText = 'Daqui 2 anos estarei trabalhando como desenvolvedora web.';     
}
getByTagP();

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da 
// Trybe (rgb(76,164,109)).
function getByClassNameMainContent () {
  const mainContent = document.getElementsByClassName('main-content')[0];
  mainContent.style.backgroundColor = 'rgb(76,164,109)';     
}
getByClassNameMainContent();

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function getByClassNameCenterContent () {
  const centerContent = document.getElementsByClassName('center-content')[0];
  centerContent.style.backgroundColor = 'white';     
}
getByClassNameCenterContent();

// 4. Crie e execute uma função que corrija o texto da tag <h1>.
function getByClassNameTitle () {
  const title = document.getElementsByClassName('title')[0];
  title.innerText = 'Exercício 5.1 - JavaScript ';     
}
getByClassNameTitle ();

// 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
function getByAllTagP () {
  const tagsP = document.getElementsByTagName('p')[1];
  tagsP.innerText = tagsP.innerText.toUpperCase();   
}
getByAllTagP();

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function printByAllTagP () {
  const tagsP = document.getElementsByTagName('p');
  for (let i = 0; i < tagsP.length; i += 1) { 
    console.log(tagsP[i].innerText);
  }  
}
printByAllTagP();
