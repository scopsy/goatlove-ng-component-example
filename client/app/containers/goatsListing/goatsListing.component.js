import template from './goatsListing.html';
import controller from './goatsListing.controller';

let goatsListingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default goatsListingComponent;
