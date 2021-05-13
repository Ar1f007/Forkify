import icons from 'url:../../img/icons.svg';
import View from './view.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found. Please try another one!';
  _message = '';
  _generateMarkup() {
    this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
