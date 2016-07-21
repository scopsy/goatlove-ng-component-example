import angular                  from 'angular';
import goatsListingComponent    from './goatsListing.component';
import GoatsList                from '../../components/goatsList/goatsList';

let goatsListingModule = angular.module('goatsListing', [
    GoatsList.name
])

.component('goatsListing', goatsListingComponent);

export default goatsListingModule;
