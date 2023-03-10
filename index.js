let container = document.querySelector(".container");
let btn = document.getElementById("spin");

btn.onclick = function () {
  let deg = Math.floor(Math.random() * 10000);
  container.style.transition = "all 10s ease-out";
  container.style.transform = `rotate(${deg}deg)`;
  setTimeout(() => {
    container.style.transition = "none";
    let actualDeg = deg % 360;
    container.style.transform = `rotate(${actualDeg}deg)`;
  }, 10000);
};

function spin() {
  const container = document.querySelector('.container');
  const arrow = document.querySelector('.arrow');
  const spinButton = document.getElementById('spin');
  const slices = document.querySelectorAll('.container div');

  let deg = Math.floor(5000 + Math.random() * 5000);

  spinButton.style.pointerEvents = 'none';

  container.style.transition = 'all 5s ease-out';
  container.style.transform = `rotate(${deg}deg)`;

  let winningSlice = slices[Math.floor(deg % 360 / (360 / slices.length))];
  let winningColor = window.getComputedStyle(winningSlice).backgroundColor;

  setTimeout(function()
   {
    spinButton.style.pointerEvents = 'auto';
    arrow.style.borderColor = winningColor;
  }, 5000);
}

///////////////////////////////////// PEGAR OS PARCIIPANTES DO POP-UP

const lista_de_participantes = document.getElementById('participants-list');
const btn_add_participante = document.getElementById('add-participant');
const nomeInput = document.getElementById('nome');

let participantes = [];

function addParticipant() {
  const participant = nomeInput.value;
  if (participant) {
    participantes.push(participant);
    const li = document.createElement('li');
    li.innerText = participant;
    lista_de_participantes.appendChild(li);
    nomeInput.value = '';
  }
}


function removeParticipant(index) {
  participantes.splice(index, 1);
  renderParticipants();
}

function renderParticipants() {
  lista_de_participantes.innerHTML = '';
  participantes.forEach((participant, index) => {
    const li = document.createElement('li');
    li.innerText = participant;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remover';
    removeButton.addEventListener('click', () => removeParticipant(index));
    li.appendChild(removeButton);
    lista_de_participantes.appendChild(li);
  });
}

btn_add_participante.addEventListener('click', addParticipant);
 

const buttonClose = document.getElementById("close-popup");
buttonClose.addEventListener("click", () => {
  const participantsList = document.getElementById("participants-list");
  const participantNames = participantsList.getElementsByTagName("li");
  const participantsTitle = document.getElementById("participants-title");
  participantsTitle.insertAdjacentHTML("afterend", "<ul id='participants' class='participants-list'></ul>");
  const participants = document.getElementById("participants");
  for (let i = 0; i < participantNames.length; i++) {
    participants.insertAdjacentHTML("beforeend", `<li>${participantNames[i].textContent}</li>`);
  }
  participantsList.innerHTML = "";
});




//FECHA O POP-UP QUANDO O BOTAO PRONTO ?? PRESSIONADO
// Seleciona o bot??o "Pronto"
const btn_close = document.getElementById("close-popup");

// Seleciona o pop-up
const pop_up = document.getElementById("myModal");

// Adiciona um ouvinte de eventos ao bot??o "Pronto"
btn_close.addEventListener("click", function() {
  // Fecha o pop-up
  pop_up.style.display = "none";
});


///////// GERA OS DESAFIOS E COLOCA NO POP-UP










const mainContainer = document.querySelector(".container");
const spinButton = document.getElementById("spin");
const challenges =
 [
  "Beije algu??m do sexo oposto",
  "Fa??a massagem nas costas de alguem da roda por 5 minutos",
  "Passe essa e as proximas 3 rodadas no colo de alguem. \
  Se voce for homem, pode trocar e escolher uma mulher para sentar no seu colo(se ela quiser)",
  "Escolha alguem da roda, v?? em outro comodo e fique com ela la por 5 minutos",
  "Fa??a 20 flexoes ou de um selinho em alguem da roda",
  "Escolha alguem da roda e de uma mordida nela(em qualquer lugar)",
  "Beba 2 doses ou fale um fetiche sexual seu",
  "Fique abra??ado com alguem da roda pelas proximas 3 rodadas",
  "Tire a camisa ou beba 2 doses(vale para mulheres tambem)",
  "Revele a ??ltima mensagem que voc?? mandou no WhatsApp",
  "Fa??a massagem nos p??s de alguem da roda",
  "Engolir um gelo em menos de 1 minuto sem volt??-lo ao copo",
  "Ligue ou mande mensagem para algu??m que por algum motivo a pessoa n??o conversa h?? muito tempo",
  "Coloque a mao no peito de alguem da roda e fique at?? o final da proxima rodada",
  "Ligue para a pizzaria e pergunte se voc?? pode devolver uma pizza",
  "Escolha alguem da roda do sexo oposto e troque de roupa com ela ou beba 2 doses",
  "Coloque o dedo na boca de alguem na roda",
  "De um tapa na bunda de alguem da roda",
  "Chupe um limao",
  "Fa??a uma queda de bra??o com a pessoa a sua esquerda",
  "Escolha alguem da roda e fa??a uma flexao com ela em suas costas",
  "De um selinho em todos do sexo oposto (ou do mesmo) da roda. Quem se recusar toma 1 dose",
  "De uma nota para a beleza de todos na roda(seja sincero(a))",
  "Escolha alguem que tenha se recusado a comprir um desafio e de um tapa na cara dela",
  "Voce tem 15 segundos para beijar alguem",
  "Escolha alguem da roda e explique em 10 segundos do porque voce nao ficaria com ela",
  "Escolha alguem e fa??a uma posi??ao sexual com ela",
  "Pegue seu celular, entre no Instagram e mande uma mensagem para alguem que voce nao conhece",
  "Fique de casal com alguem por 3 rodadas(isso quer dizer que nem voce nem seu parceiro(a) podem beijar outra pessoa). \
   Voces devem ficar juntos, como um casal ficaria", 
  "Escolha alguem e morda a bunda dessa pessoa",
  "",


  






];

const verdades = [
  "Quem voc?? levaria dessa roda para uma ilha deserta?",
  "Com quantas pessoas dessa roda voce ficaria? Caso a resposta seja 1, diga quem ?? e os que nao foram escolhidos devem beber uma dose",
  "Voc?? j?? brigou na rua? Porque?",
  "J?? ficou com o ex de uma amigo(a)?",
  "Voc?? j?? foi suspenso da escola?",
  "Qual foi o sonho mais estranho que voc?? j?? teve?",
  "Se hoje fosse o seu ??ltimo dia de vida, o que voc?? faria?",
  "De 0 a 10, que nota voc?? daria para o (escolha algu??m) em termos de (beleza, simpatia, intelig??ncia)?",
  "De 0 a 10, escolha algu??m e diga qual a chance dele(a) beijar voc??",
  "?? verdade que voc?? j?? ficou com algu??m dessa roda?",
  "Se o mundo fosse acabar e voc?? pudesse salvar apenas uma pessoa para sobreviver, quem seria?",
  "?? verdade que voc?? j?? mandou nudes?",
  "Voc?? j?? beijou mais de uma pessoa no mesmo dia? Quantas?",
  "Voc?? ficaria tranquilo se todo o hist??rico do seu WhatsApp ficasse p??blico agora?",
  "?? verdade que voc?? ficaria com algu??m que est?? presente aqui na roda?",
  "Qual ?? a sua t??cnica de sedu????o infal??vel?",
  "Qual o lugar mais inusitado que voc?? j?? transou?",
  "Algemas, cordas ou vendas?",
  "J?? transou em local p??blico?",
  "J?? fez sexo anal?",
  "Transaria por dinheiro?",
  "Ja achou que estava gravida ou que engravidou alguem?",
  "Quantos foras voce ja tomou?",
  "Ja chegou em alguem pessoalmente?",
  "Ficaria com alguem do mesmo sexo por 10 mil reais?",
  "Faria sexo dentro de um templo ou igreja?",
  "Ja fez sexo com seus pais ou os pais dele(a) em casa?",
  "Ja gozou na cara de alguem ou ja recebeu gozada na cara?",
  "Sem camisinha ?? melhor?",
  "Em local proibido ?? melhor?",
  "Ficaria com alguem que namora ou ?? casado(a)?",
  "Se sua chefe quisesse fazer sexo com voce, voce faria?",
  "Se voce fosse um professor(a) universitario e um aluno(a) quisesse transar com voce, voce transaria?",
  "Ja transou com alguem do tinder?",
  "Ja fez sexo no cinema?",
  "Ja foi pego transando?",

];


spinButton.onclick = function () {
  let deg = Math.floor(Math.random() * 10000);
  mainContainer.style.transition = "all 10s ease-out";
  mainContainer.style.transform = `rotate(${deg}deg)`;
  setTimeout(() => {
    mainContainer.style.transition = "none";
    let actualDeg = deg % 360;
    mainContainer.style.transform = `rotate(${actualDeg}deg)`;

    setTimeout(() => {
      const popup = document.getElementById("challenge-modal");
      const challengeText = document.getElementById("challenge-text");
      let index = Math.floor(Math.random() * challenges.length);
      let challenge = challenges[index];
      challengeText.textContent = challenge;
      popup.style.display = "block";
    }, 5000);
  }, 10000);
};

function addChallenge() {
  const challenge = prompt("Digite um desafio:");
  if (challenge) {
    challenges.push(challenge);
  }
}

const addChallengeButton = document.getElementById("add-challenge");
addChallengeButton.addEventListener("click", addChallenge);

const closeButton = document.getElementById("close-popup");
closeButton.addEventListener("click", () => {
  const participantsList = document.getElementById("participants-list");
  const participantNames = participantsList.getElementsByTagName("li");
  const participantsTitle = document.getElementById("participants-title");
  participantsTitle.insertAdjacentHTML("afterend", "<ul id='participants' class='participants-list'></ul>");
  const participants = document.getElementById("participants");
  for (let i = 0; i < participantNames.length; i++) {
    participants.insertAdjacentHTML("beforeend", `<li>${participantNames[i].textContent}</li>`);
  }
  participantsList.innerHTML = "";
  const popup = document.getElementById("challenge-modal");
  popup.style.display = "none";
});

// const closeBtn = document.getElementById("close-popup");
// const popup = document.getElementById("challenge-modal");
// closeBtn.addEventListener("click", function() {
//   popup.style.display = "none";
// });






const participantsList = document.getElementById('participants-list');
const addParticipantButton = document.getElementById('add-participant');
const nameInput = document.getElementById('nome');
let participants = [];

function addParticipant() {
  const participant = nomeInput.value;
  if (participant) {
    participantes.push(participant);
    const li = document.createElement('li');
    li.innerText = participant;
    lista_de_participantes.appendChild(li);
    nomeInput.value = '';
  }
}

function removeParticipant(index) {
  participantes.splice(index, 1);
  renderParticipants();
}

function renderParticipants() {
  lista_de_participantes.innerHTML = '';
  participantes.forEach((participant, index) => {
    const li = document.createElement('li');
    li.innerText = participant;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remover';
    removeButton.addEventListener('click', () => removeParticipant(index));
    li.appendChild(removeButton);
    lista_de_participantes.appendChild(li);
  });
}

addParticipantButton.addEventListener('click', addParticipant);


const closeBtn = document.querySelector("new-challenge");
const popup = document.querySelector("#challenge-modal");
closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
});


///FECHA O POP-UP QUANDO CLICAR EM 'CONTINUAR'

function closePop() {
  document.getElementById("challenge-modal").style.display = "none";
}

//COLOCA UM PARTICIPANTE ALEATORIO NO POP-UP


document.getElementById("show-popup").addEventListener("click", showPop);
