const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArt(name) {
  return name.replace(/^(a |the |an )/i, '').trim();
}
const sorted = bands.sort((a, b) => stripArt(a) > stripArt(b) ? 1 : -1);

function addItem(item) {
  const li = document.createElement('li');
  const itemText = document.createTextNode(item);
  li.appendChild(itemText);
  return li;
}
const bandList = document.querySelector('#bands');
sorted.forEach(band => bandList.appendChild(addItem(band)));
