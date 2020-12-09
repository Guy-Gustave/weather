
const dom = {
  locally : document.querySelector('[.locally]'),
  date : document.querySelector('[.date]'),
  inputForm: document.querySelector('[.form-inline]'),
  inputValue: document.querySelector('[.formInput]'),
  submit : document.querySelector('[.submitWeather]'),
  city: document.querySelector('[.data-name]'),
  icon: document.querySelector('[.data-icon]'),
  temp: document.querySelector('.temp'),
  status: document.querySelector('[.data-status]'),
  humidity: document.querySelector('[.data-humid]'),
  feelsLike: document.querySelector('[.data-feels-like]'),
  date: document.querySelector('[.data-date]'),
  celcius: document.querySelector('[.data-cel]'),
  fahren: document.querySelector('[.data-far]'),
};

export default { dom };