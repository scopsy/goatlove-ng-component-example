import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatsListComponent from './goatsList.component';

import GoatListItemComponent from '../goatListItem/goatListItem';

const goatsListModule = angular.module('goatsList', [
    uiRouter,

    GoatListItemComponent.name
])

.component('goatsList', goatsListComponent);

export default goatsListModule;
