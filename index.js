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

