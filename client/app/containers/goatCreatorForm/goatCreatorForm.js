import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goatCreatorFormComponent from './goatCreatorForm.component';

let gotCreatorFormModule = angular.module('gotCreatorForm', [
  uiRouter
])

.component('goatCreatorForm', goatCreatorFormComponent);

export default gotCreatorFormModule;
