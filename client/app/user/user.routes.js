'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/user/:printMe', {
    template: '<about></about>'
  });

  $routeProvider.when('/user/', {
    template: '<about></about>'
  });
}
