import template from './goatListItem.html';
import controller from './goatListItem.controller';
import './goatListItem.scss';

const goatListItemComponent = {
  restrict: 'E',
  bindings: {
    goat: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default goatListItemComponent;
