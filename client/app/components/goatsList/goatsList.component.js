import template from './goatsList.html';
import controller from './goatsList.controller';

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
