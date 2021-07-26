import styles from './styles.css';
import Logo from './assets/webpack.svg';
import geminis from './assets/saga-kanon.png';

const array = [1, 2, 3];

const codeESNext = () => console.log(...array);

console.log('Hello');

codeESNext();

// document.getElementById('app').innerHTML = `<img src="${Logo}" alt="logo" />`;

const d = document,
  $app = d.getElementById('app'),
  $h1 = d.createElement('h1'),
  $logo = d.createElement('img'),
  $img = d.createElement('img');

$h1.textContent = 'Probando vista';
$logo.src = Logo;
$logo.classList.add('icon');
$img.src = geminis;

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($img);
