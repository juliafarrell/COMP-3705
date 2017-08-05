import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './about.routes';

export class AboutController {
   /*@ngInject*/
  constructor($routeParams) {
    this.$routeParams = $routeParams;
    this.setData();
  }
  setData() {
    this.printMe = this.$routeParams.printMe;
  }
}


export default angular.module('comp3705App.about', [ngRoute])
  .config(routing)
  .component('about', {
    template: require('./about.html'),
    controller: AboutController,
    controllerAs: 'AboutController'
  })
  .name;
