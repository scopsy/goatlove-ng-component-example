import angular              from 'angular';
import goatsListComponent   from './goatsList.component';

import GoatListItemComponent from '../goatListItem/goatListItem';

const goatsListModule = angular.module('goatsList', [
    GoatListItemComponent.name
])

.component('goatsList', goatsListComponent);

export default goatsListModule;
