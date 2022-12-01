import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
};

refs.input.addEventListener('input', debounce(onInputSubmit, DEBOUNCE_DELAY));

function onInputSubmit() { };

const DEBOUNCE_DELAY = 300;
