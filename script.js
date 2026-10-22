const hearts = document.getElementById('hearts');

for (let i = 0; i < 18; i++) {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = ['♡', '♥', '✧'][i % 3];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDelay = Math.random() * 9 + 's';
  heart.style.fontSize = (15 + Math.random() * 22) + 'px';
  hearts.appendChild(heart);
}

const yes = document.getElementById('yes');
const no = document.getElementById('no');

let yesScale = 1;
let noScale = 1;

no.addEventListener('click', () => {
  yesScale = Math.min(yesScale + 0.18, 2.1);
  noScale = Math.max(noScale - 0.10, 0.72);

  yes.style.setProperty('--yes-scale', yesScale);
  no.style.setProperty('--no-scale', noScale);
  document.getElementById('hint').textContent =
    'Хариултаа тайван сонгоорой ♡';
});

yes.addEventListener('click', () => {
  document.getElementById('heading').textContent = 'Баярлалаа! 💖';
  document.getElementById('question').style.display = 'none';
  document.getElementById('buttons').style.display = 'none';
  document.getElementById('hint').style.display = 'none';
  document.getElementById('letter').style.display = 'block';
  document.getElementById('reset').style.display = 'inline-block';
});

function openLetter() {
  document.getElementById('paper').style.display = 'block';
  document.getElementById('envelope').textContent = '💖';
}

const envelope = document.getElementById('envelope');
envelope.addEventListener('click', openLetter);

envelope.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openLetter();
  }
});

document.getElementById('reset').addEventListener('click', () => {
  yesScale = 1;
  noScale = 1;
  yes.style.setProperty('--yes-scale', 1);
  no.style.setProperty('--no-scale', 1);

  document.getElementById('heading').textContent =
    'Чамд нэг зүйл хэлэх гэсэн юм...';
  document.getElementById('question').style.display = 'block';
  document.getElementById('buttons').style.display = 'flex';
  document.getElementById('hint').style.display = 'block';
  document.getElementById('hint').textContent =
    'Зүрх сэтгэлээсээ сонгоорой ♡';
  document.getElementById('letter').style.display = 'none';
  document.getElementById('paper').style.display = 'none';
  envelope.textContent = '💌';
  document.getElementById('reset').style.display = 'none';
});



