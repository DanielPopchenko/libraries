import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openModalBtnRef = document.querySelector(
  'button[data-open-madal]'
);

const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate, {
  onShow(instance) {
    const closeModalBtnRef = getcloseModalBtnRef(instance);
    closeModalBtnRef.addEventListener('click', instance.close);

    window.addEventListener('keydown', closeModalByPressingEsc);
  },
  // onClose - Метод API basicLightbox
  onClose(instance) {
    const closeModalBtnRef = getcloseModalBtnRef(instance);
    closeModalBtnRef.removeEventListener('click', instance.close);
    window.removeEventListener('keydown', closeModalByPressingEsc);
  },
});

// Сразу передаем ссылку на метод
openModalBtnRef.addEventListener('click', instance.show);

function getcloseModalBtnRef(parent) {
  /**
   * instance.element() - возвращает ссылку на всю модалку
   * Там мы находим нашу кнопку
   */
  return parent.element().querySelector('button[data-close-modal]');
}

function closeModalByPressingEsc(e) {
  if (e.code === 'Escape') {
    console.log('hello');
    instance.close();
  }
}
