import icons from 'url:../../img/icons.svg';
import View from './view.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found. Please try another one!';
  _message = '';

  _generateMarkup() {
    this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(res) {
    return `
    <li class="preview">
          <a class="preview__link" href="${res.id}">
            <figure class="preview__fig">
              <img src="${res.image}" alt="${res.title}" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${res.title}</h4>
              <p class="preview__publisher">${res.publisher}</p>
            </div>
          </a>
        </li>
        `;
  }
}

export default new ResultsView();
