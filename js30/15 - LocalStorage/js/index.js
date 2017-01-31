const addItems = document.querySelector('.add-items'); // form
const itemsList = document.querySelector('.plates'); // ul
const items = JSON.parse(localStorage.getItem('items')) || [];

function populateList(items = [], list) {
 // don't use innerHTML for real stuff
  list.innerHTML = items.map((item, i) => {
    return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
          <label for="item${i}">${item.text}</label>
        </li>
      `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
