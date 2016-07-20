import template from './goatsList.html';
import controller from './goatsList.controller';
import './goatsList.scss';

let goatsListComponent = {
  restrict: 'E',
  bindings: {
    goats: '<'
  },
  template,
  controller,
  controllerAs: 'vm'

};

export default goatsListComponent;
