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

const participantsList = document.getElementById('participants-list');
const addParticipantButton = document.getElementById('add-participant');
const nameInput = document.getElementById('nome');

let participants = [];

function addParticipant() {
  const participant = nameInput.value;
  if (participant) {
    participants.push(participant);
    const li = document.createElement('li');
    li.innerText = participant;
    participantsList.appendChild(li);
    nameInput.value = '';
  }
}

function removeParticipant(index) {
  participants.splice(index, 1);
  renderParticipants();
}

function renderParticipants() {
  participantsList.innerHTML = '';
  participants.forEach((participant, index) => {
    const li = document.createElement('li');
    li.innerText = participant;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remover';
    removeButton.addEventListener('click', () => removeParticipant(index));
    li.appendChild(removeButton);
    participantsList.appendChild(li);
  });
}

addParticipantButton.addEventListener('click', addParticipant);








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
const closeBtn = document.getElementById("close-popup");

// Seleciona o pop-up
const popup = document.getElementById("myModal");

// Adiciona um ouvinte de eventos ao botão "Pronto"
closeBtn.addEventListener("click", function() {
  // Fecha o pop-up
  popup.style.display = "none";
});


///////// COLOCA O NOME DOS PARTICIPANTES EM BAIXO DO H1 'PARTICIPANTES







