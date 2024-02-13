const galery = document.querySelector('.galeria');
const textos = document.querySelector('.mitexto');
const img0 = document.querySelector('.img0');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');

let text = [
  'Vacas que me encontré paseando',
  'Mis gafas en el escritorio',
  'Camino a la perdición',
  'Paseando en bicicleta',
  'Vias del tren'
]

function cartografo(img, txt) {
  galery.src = 'https://picsum.photos/id/'+img+'/400/400';
  textos.innerHTML = text[txt];
}

img0.addEventListener('click', () => {
  cartografo(200, 0)
});

img1.addEventListener('click', () => {
  cartografo(201, 1)
});

img2.addEventListener('click', () => {
  cartografo(202, 2)
});

img3.addEventListener('click', () => {
  cartografo(203, 3)
});

img4.addEventListener('click', () => {
  cartografo(204, 4)
});