const gambar = document.getElementById('gambar');

gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215);

const buttons = document.querySelectorAll('.button');
const playButton = buttons[3];
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute('style', 'background: red;');
// ============================
const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = 'Belajar Programming di Dicoding';