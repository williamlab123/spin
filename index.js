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

  setTimeout(function() {
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








// BOTAO PRONTO

// const buttonClose = document.getElementById("close-popup");
// buttonClose.addEventListener("click", () => {
//   const participantsList = document.getElementById("participants-list");
//   const participantNames = participantsList.getElementsByTagName("li");
//   const participantsTitle = document.getElementById("participants-title");
//   participantsTitle.insertAdjacentHTML("afterend", "<ul id='participants'></ul>");
//   const participants = document.getElementById("participants");
//   for (let i = 0; i < participantNames.length; i++) {
//     participants.insertAdjacentHTML("beforeend", `<li>${participantNames[i].textContent}</li>`);
//   }
//   participantsList.innerHTML = "";
 
// });
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




//FECHA O POP-UP QUANDO O BOTAO PRONTO É PRESSIONADO
// Seleciona o botão "Pronto"
const btn_close = document.getElementById("close-popup");

// Seleciona o pop-up
const pop_up = document.getElementById("myModal");

// Adiciona um ouvinte de eventos ao botão "Pronto"
btn_close.addEventListener("click", function() {
  // Fecha o pop-up
  pop_up.style.display = "none";
});


///////// GERA OS DESAFIOS E COLOCA NO POP-UP

// let mainContainer = document.querySelector(".container");
// let spinButton = document.getElementById("spin");
// let challenges =
//  [
//      "beije alguem do sexo oposto",
//      "tire a calcinha"
// ];

// spinButton.onclick = function () {
//   let deg = Math.floor(Math.random() * 10000);
//   mainContainer.style.transition = "all 10s ease-out";
//   mainContainer.style.transform = `rotate(${deg}deg)`;
//   setTimeout(() => {
//     mainContainer.style.transition = "none";
//     let actualDeg = deg % 360;
//     mainContainer.style.transform = `rotate(${actualDeg}deg)`;

//     setTimeout(() => {
//       let index = Math.floor(Math.random() * challenges.length);
//       let challenge = challenges[index];
//       alert(challenge);
//     }, 5000);
//   }, 10000);
// };

// function addChallenge() {
//   const challenge = prompt("Digite um desafio:");
//   if (challenge) {
//     challenges.push(challenge);
//   }
// }

// const addChallengeButton = document.getElementById("add-challenge");
// addChallengeButton.addEventListener("click", addChallenge);

// const closeButton = document.getElementById("close-popup");
// closeButton.addEventListener("click", () => {
//   const participantsList = document.getElementById("participants-list");
//   const participantNames = participantsList.getElementsByTagName("li");
//   const participantsTitle = document.getElementById("participants-title");
//   participantsTitle.insertAdjacentHTML("afterend", "<ul id='participants' class='participants-list'></ul>");
//   const participants = document.getElementById("participants");
//   for (let i = 0; i < participantNames.length; i++) {
//     participants.insertAdjacentHTML("beforeend", `<li>${participantNames[i].textContent}</li>`);
//   }
//   participantsList.innerHTML = "";
// });

// const closeBtn = document.getElementById("close-popup");
// const popup = document.getElementById("myModal");
// btn_close.addEventListener("click", function() {
//   pop_up.style.display = "none";
// });

// const participantsList = document.getElementById('participants-list');
// const addParticipantButton = document.getElementById('add-participant');
// const nameInput = document.getElementById('nome');
// let participants = [];

// function addParticipant() {
//   const participant = nomeInput.value;
//   if (participant) {
//     participantes.push(participant);
//     const li = document.createElement('li');
//     li.innerText = participant;
//     lista_de_participantes.appendChild(li);
//     nomeInput.value = '';
//   }
// }

// function removeParticipant(index) {
//   participantes.splice(index, 1);
//   renderParticipants();
// }

// function renderParticipants() {
//   lista_de_participantes.innerHTML = '';
//   participantes.forEach((participant, index) => {
//     const li = document.createElement('li');
//     li.innerText = participant;
//     const removeButton = document.createElement('button');
//     removeButton.innerText = 'Remover';
//     removeButton.addEventListener('click', () => removeParticipant(index));
//     li.appendChild(removeButton);
//     lista_de_participantes.appendChild(li);
//   });
// }

// btn_add_participante.addEventListener('click', addParticipant);






////////////////////


// const mainContainer = document.querySelector(".container");
// const spinButton = document.getElementById("spin");
// const challenges = [
//   "beije alguém do sexo oposto",
//   "tire a calcinha"
// ];

// spinButton.onclick = function () {
//   let deg = Math.floor(Math.random() * 10000);
//   mainContainer.style.transition = "all 10s ease-out";
//   mainContainer.style.transform = `rotate(${deg}deg)`;
//   setTimeout(() => {
//     mainContainer.style.transition = "none";
//     let actualDeg = deg % 360;
//     mainContainer.style.transform = `rotate(${actualDeg}deg)`;

//     setTimeout(() => {
//       const popup = document.getElementById("challenge-modal");
//       const challengeText = document.getElementById("challenge-text");
//       let index = Math.floor(Math.random() * challenges.length);
//       let challenge = challenges[index];
//       challengeText.textContent = challenge;
//       popup.style.display = "block";
//     }, 5000);
//   }, 10000);
// };

// function addChallenge() {
//   const challenge = prompt("Digite um desafio:");
//   if (challenge) {
//     challenges.push(challenge);
//   }
// }

// const addChallengeButton = document.getElementById("add-challenge");
// addChallengeButton.addEventListener("click", addChallenge);

// const closeButton = document.getElementById("close-popup");
// closeButton.addEventListener("click", () => {
//   const participantsList = document.getElementById("participants-list");
//   const participantNames = participantsList.getElementsByTagName("li");
//   const participantsTitle = document.getElementById("participants-title");
//   participantsTitle.insertAdjacentHTML("afterend", "<ul id='participants' class='participants-list'></ul>");
//   const participants = document.getElementById("participants");
//   for (let i = 0; i < participantNames.length; i++) {
//     participants.insertAdjacentHTML("beforeend", `<li>${participantNames[i].textContent}</li>`);
//   }
//   participantsList.innerHTML = "";
// });

// const closeBtn = document.getElementById("close-popup");
// const popup = document.getElementById("myModal");
// btn_close.addEventListener("click", function() {
//   pop_up.style.display = "none";
// });

// const participantsList = document.getElementById('participants-list');
// const addParticipantButton = document.getElementById('add-participant');
// const nameInput = document.getElementById('nome');
// let participants = [];

// function addParticipant() {
//   const participant = nomeInput.value;
//   if (participant) {
//     participantes.push(participant);
//     const li = document.createElement('li');
//     li.innerText = participant;
//     lista_de_participantes.appendChild(li);
//     nomeInput.value = '';
//   }
// }

// function removeParticipant(index) {
//   participantes.splice(index, 1);
//   renderParticipants();
// }

// function renderParticipants() {
//   lista_de_participantes.innerHTML = '';
//   participantes.forEach((participant, index) => {
//     const li = document.createElement('li');
//     li.innerText = participant;
//     const removeButton = document.createElement('button');
//     removeButton.innerText = 'Remover';
//     removeButton.addEventListener('click', () => removeParticipant(index));
//     li.appendChild(removeButton);
//     lista_de_participantes.appendChild(li);
//   });
// }

// btn_add_participante.addEventListener('click', addParticipant);

const mainContainer = document.querySelector(".container");
const spinButton = document.getElementById("spin");
const challenges = [
  "beije alguém do sexo oposto",
  "tire a calcinha"
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
