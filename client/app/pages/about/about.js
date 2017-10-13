import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

const aboutModule = angular.module('about', [
  uiRouter
])

.component('about', aboutComponent);

export default aboutModule;
