import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatsListingComponent from './goatsListing.component';
import GoatsList from '../../components/goatsList/goatsList';

let goatsListingModule = angular.module('goatsListing', [
    uiRouter,

    GoatsList.name
])

.component('goatsListing', goatsListingComponent);

export default goatsListingModule;
