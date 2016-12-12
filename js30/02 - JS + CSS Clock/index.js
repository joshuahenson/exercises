const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hr-hand');

function tick() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secPos = ((seconds / 60) * 360) - 90;
  secHand.style.transform = `rotate(${secPos}deg)`;

  const minutes = now.getMinutes();
  const minPos = ((minutes / 60) * 360) - 90;
  minHand.style.transform = `rotate(${minPos}deg)`;

  const hours = now.getHours();
  const hrPos = ((hours / 12) * 360) - 90;
  hrHand.style.transform = `rotate(${hrPos}deg)`;
}

setInterval(tick, 1000);
