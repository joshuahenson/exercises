const timesList = Array.from(document.querySelectorAll('[data-time]'));

const totalSeconds = timesList
  .map(item => item.dataset.time) // get time strings
  .map(timeStr => { // convert to array of numbers and return seconds
    const [mins, secs] = timeStr.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((a, b) => a + b);

let seconds = totalSeconds;
const hours = Math.floor(seconds / 3600);
seconds %= 3600;
const minutes = Math.floor(seconds / 60);
seconds %= 60;
console.log(hours, minutes, seconds)