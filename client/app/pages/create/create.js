import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createComponent from './create.component';

import GoatCreateForm from '../../containers/goatCreatorForm/goatCreatorForm';

const createModule = angular.module('create', [
    uiRouter,

    GoatCreateForm.name
])

.component('create', createComponent);

export default createModule;
