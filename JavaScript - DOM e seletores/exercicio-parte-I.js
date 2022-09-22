// Recupere o elemento que contém o título da página e faça algo com ele, como 
// alterá-lo para o nome do seu filme favorito.
document.getElementById('page-title').innerText = 'Game of Thrones'

// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById('second-paragraph').innerText = 'A história gira em torno de uma ' + 
'batalha entre os Sete Reinos, onde duas famílias dominantes estão lutando pelo ' + 
'controle do Trono de Ferro, cuja posse possivelmente assegurará a sobrevivência ' + 
'durante o inverno que está por vir.';

// Por fim, recupere o subtítulo e altere-o também.
document.getElementById('subtitle').innerText = 'As Crônicas de Gelo e Fogo';

// Adicione uma classe igual para os dois parágrafos.

// Recupere os seus parágrafos via código JavaScript, usando a função 
// getElementsByClassName;
let paragrafo = document.getElementsByClassName('paragrafo');

// Altere algum estilo do primeiro deles.
paragrafo[0].style.fontSize = '30px'; 

// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
document.getElementsByTagName('h4')[0].style.color = 'yellow';
