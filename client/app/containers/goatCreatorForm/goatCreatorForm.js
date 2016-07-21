import angular                  from 'angular';
import goatCreatorFormComponent from './goatCreatorForm.component';

let gotCreatorFormModule = angular.module('gotCreatorForm', [])

.component('goatCreatorForm', goatCreatorFormComponent);

export default gotCreatorFormModule;
