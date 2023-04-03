import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';
// це називається антипатрн ключ присваївають змінній
const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  //  зупиняємо перезагрузку сторінки
  evt.preventDefault();

  console.log('Отправляем форму');
  // очищаемо форму
  evt.currentTarget.reset();
  // коли форму відправили очисчаємо форму
//  тобіш нажали на кнопку
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
function onTextareaInput(evt) {
  //  ту ставимо не currentTagert а  target  тому що буде 
  // помилка в консолі із за  throttle тяк як при
  // всплитті там за енний час накопились стекі
  // і значення буде інше
  const message = evt.target.value;
        // записуємо меседж  по ключю
        // в локал сторідж     
  localStorage.setItem(STORAGE_KEY, message);
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
//  викликається при загрузкі сторінки
function populateTextarea() {
  // отримуємо значення з сховища            тут ключ який зберігає значення
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  //  якщо там щось є то видай на гора, інакше нічого не роби
  // тобіш якщо вибило то збережеться текст
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);
// це такий собі локалсторадж якщо значення немає то запише
// якщо є перезапише
//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
