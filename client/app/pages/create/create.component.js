import template from './create.html';
import controller from './create.controller';
import './create.scss';

let createComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default createComponent;
