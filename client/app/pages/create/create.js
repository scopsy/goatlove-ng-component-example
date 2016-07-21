import angular          from 'angular';
import createComponent  from './create.component';
import GoatCreateForm   from '../../containers/goatCreatorForm/goatCreatorForm';

const createModule = angular.module('create', [
    GoatCreateForm.name
])

.component('create', createComponent);

export default createModule;
