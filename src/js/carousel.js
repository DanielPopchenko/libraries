import Siema from 'siema';
const siema = new Siema({
  duration: 500,
});

const nextBtnRef = document.querySelector('.js-next');
const prevBtnRef = document.querySelector('.js-prev');

nextBtnRef.addEventListener('click', () => siema.next());
prevBtnRef.addEventListener('click', () => siema.prev());
