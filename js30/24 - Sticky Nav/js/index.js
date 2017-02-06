const nav = document.getElementById('main');
const topOfNav = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

document.addEventListener('scroll', fixedNav);