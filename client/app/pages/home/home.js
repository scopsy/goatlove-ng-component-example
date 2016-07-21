import angular                  from 'angular';
import homeComponent            from './home.component';
import GoatsListingComponent    from '../../containers/goatsListing/goatsListing';

let homeModule = angular.module('home', [
    GoatsListingComponent.name
])

.component('home', homeComponent);

export default homeModule;
