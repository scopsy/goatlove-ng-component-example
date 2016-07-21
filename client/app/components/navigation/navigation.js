import angular              from 'angular';
import navigationComponent  from './navigation.component';

let navigationModule = angular.module('navigation', [])

.component('navigation', navigationComponent);

export default navigationModule;
