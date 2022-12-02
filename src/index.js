import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';


const DEBOUNCE_DELAY = 300;


const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countrysInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInputSubmit, DEBOUNCE_DELAY));

const clearList = () => (refs.countryList.innerHTML = '');
const clearCountrys = () => (refs.countrysInfo.innerHTML = '');

function onInputSubmit(e) {
  let name = refs.input.ariaValueMax.trim();

  if (name) {
    fetchCountries(name)
      .then(items => {
        if (items.length > 10) {
          Notify.info(
            `Too many matches found. Please enter a more specific name.`,
            { timeout: 1000 }
          );
        } else
          items.length > 1 ? renderCountry(items) : renderSinglCountry(items);
      })
      .catch(onFechError);
  }

  clearList();
  clearCountrys();
}

function onFechError() {
  Notify.failure(`OOps, there is no country with that name`, { timeout: 1000 });
};



