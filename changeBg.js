function random(number) {
  return Math.floor(Math.random()*number);
}

function bgDhange() {
  const rndCol = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
  document.body.style.backgroundColor = rndCol;
}

bgChange();
