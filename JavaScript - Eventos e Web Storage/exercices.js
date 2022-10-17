function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Crie um calendário dinamicamente.

// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês 
// de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os 
// adicionar dentro da tag <ul>.

// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente
// Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days'
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. 
// Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também 
// a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a 
// classe friday. Ex: <li class="day friday">4</li>

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  const uldays = document.querySelector('#days');
  for (const day of decemberDaysList) {
    const generateDayOfWeek = document.createElement('li');
    generateDayOfWeek.innerHTML = day;
    generateDayOfWeek.setAttribute('day', day);
    generateDayOfWeek.className = 'day';
    if (day === 24 || day === 25 || day === 31) {
      generateDayOfWeek.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      generateDayOfWeek.classList.add('friday');
    }
    uldays.appendChild(generateDayOfWeek);
  }
}

createDays();

// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function createBtnHoliday(feriados) {
  const divButton = document.querySelector('.buttons-container');
  const buttonHoliday = document.createElement('button');
  buttonHoliday.innerHTML = feriados;
  buttonHoliday.id = 'btn-holiday';
  divButton.appendChild(buttonHoliday);
}

createBtnHoliday('Feriados');

// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos 
// dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado 
// novamente, ele retorna à configuração inicial com a cor “#777”.

function addColorHoliday() {
  const getButton = document.getElementById('btn-holiday');
  getButton.addEventListener('click', function () {
    const daysHoliday = document.querySelectorAll('.holiday');
    for (const day of daysHoliday) {
      if (day.style.color === 'red') {
        day.style.color = '#777';
      } else {
        day.style.color = 'red';
      }
    }
  });
}

addColorHoliday()

// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function createBtnFriday(sexta) {
  const divButton = document.querySelector('.buttons-container');
  const buttonFriday = document.createElement('button');
  buttonFriday.innerHTML = sexta;
  buttonFriday.id = 'btn-friday';
  divButton.appendChild(buttonFriday);
}

createBtnFriday('Sexta-feira');

// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. 
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser 
// exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado 
// novamente, ele retorna à configuração inicial exibindo os dias.

function changeTextFriday() {
  const getButton = document.getElementById('btn-friday');
  const daysFriday = document.querySelectorAll('.friday');
  const fridaysArray = [];
  const fridayMessage = 'Sextou!'
  for (const day of daysFriday) {
    fridaysArray.push(day.innerHTML);
  }
  getButton.addEventListener('click', function () {
    // for (const day of daysFriday) {
    for (const [index, day] of daysFriday.entries()) {
      if (day.innerText.includes(fridayMessage)) {
        // day.innerText = day.innerText.split('|')[0].trim();
        day.innerText = fridaysArray[index]
      } else {
        // day.innerText = day.innerText + ' | ' + fridayMessage;
        day.innerText = fridayMessage;
      }
    }
  });
}

changeTextFriday()

// Implemente duas funções que criem um efeito de “zoom”.
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia 
// deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao 
// tamanho original. Dica - Propriedade: event.target.

function changeDaysZoom() {
  const daysList = document.querySelectorAll('.day');
  for (const day of daysList) {
    day.addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '40px';
      event.target.style.cursor = 'pointer';
    });
  }
}

changeDaysZoom()

function changeDaysReverter() {
  const daysList = document.querySelectorAll('.day');
  for (const day of daysList) {
    day.addEventListener('mouseout', function (event) {
      event.target.style.fontSize = 'unset';
    });
  }
}

changeDaysReverter()

// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) 
// e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a
// classe "my-tasks".

function createTasks(tarefa) {
  const tagDiv = document.querySelector('.my-tasks');
  const task = document.createElement('span');
  task.innerText = tarefa;
  tagDiv.appendChild(task);
}

createTasks('Cozinhar');

// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente
// um elemento de tag <div> com a classe task
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui
// a classe "my-tasks"

function createLegend(cor) {
  const tagDiv = document.querySelector('.my-tasks');
  const legend = document.createElement('div');
  legend.className = 'task';
  legend.style.backgroundColor = cor;
  legend.style.cursor = 'pointer';
  tagDiv.appendChild(legend);
}

createLegend('green');

// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua 
// tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa 
// possuir a classe task selected ela estará selecionada
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, 
// ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function toggleSelectedTasks(event) {
  const selected = event.target.classList.contains('selected')
  if (selected) {
    event.target.classList.remove('selected');
  } else {
    event.target.classList.add('selected');
  }
}


function selectedtask() {
  const tasks = document.querySelectorAll('.task');
  for (const task of tasks) {
    task.addEventListener('click', toggleSelectedTasks);
  }
}

selectedtask();

// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a 
// esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à 
// configuração inicial rgb(119,119,119)

function addTaksDay() {
  const daysList = document.querySelectorAll('.day');
  for (const day of daysList) {
    day.addEventListener('click', function (event) {
      const selectedTask = document.querySelector('.selected');
      if (selectedTask) {
        if (event.target.style.color === selectedTask.style.backgroundColor) {
          event.target.style.color = 'rgb(119,119,119)'
        } else {
          event.target.style.color = selectedTask.style.backgroundColor;
        }
      }
    });
  }
}

addTaksDay();

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar
// um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista 
// “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”.
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert 
// com uma mensagem de erro ao clicar em “ADICIONAR”.

function addCompromisses() {
  const buttonAdd = document.getElementById('btn-add');
  const inputText = document.getElementById('task-input');
  const ulCompromisses = document.querySelector('.task-list');

  buttonAdd.addEventListener('click', function () {
    if (inputText.value.length > 0) {
    const liCompromisses = document.createElement('li');
    liCompromisses.innerText = inputText.value;
    ulCompromisses.appendChild(liCompromisses);
    inputText.value = ''; 
    } else {
      alert('No compromisses.');
    }  
  });
}

addCompromisses();