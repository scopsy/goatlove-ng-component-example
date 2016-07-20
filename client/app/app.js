import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import AppComponent from './app.component';

import NavigationComponent from './components/navigation/navigation';

import HomeComponent from './pages/home/home';
import CreateComponent from './pages/create/create';

import GoatsService from './services/GoatsService';

// import our default styles for the whole application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular
    .module('app', [
        uiRouter,

        NavigationComponent.name,
        CreateComponent.name,
        HomeComponent.name
    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        "ngInject";

        // Define our app routing, we will keep our layout inside the app component
        // The layout route will be abstract and it will hold all of our app views
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                template: '<app></app>'
            })

            // Dashboard page to contain our goats list page
            .state('app.home', {
                url: '/home',
                template: '<home></home>'
            })

            // Create route for our goat listings creator
            .state('app.create', {
                url: '/create',
                template: '<create></create>'
            });

        $urlRouterProvider.otherwise('/app/home');
    })
    .component('app', AppComponent)
    .factory('GoatsService', GoatsService);
