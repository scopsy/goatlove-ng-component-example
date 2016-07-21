import angular from 'angular';
import goatListItemComponent from './goatListItem.component';

const goatListItemModule = angular.module('goatListItem', [])

.component('goatListItem', goatListItemComponent);

export default goatListItemModule;
