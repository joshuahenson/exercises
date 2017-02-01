const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;

function textShadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  // make sure child of hero doesn't reset x and y
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  const xWalk = Math.round(((x / width) * walk) - (walk / 2));
  const yWalk = Math.round(((y / height) * walk) - (walk / 2));
  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0,255,0,0.2)`;
}

document.addEventListener('mousemove', textShadow);
