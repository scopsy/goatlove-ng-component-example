import template from './goatsListing.html';
import controller from './goatsListing.controller';
import './goatsListing.scss';

let goatsListingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default goatsListingComponent;
