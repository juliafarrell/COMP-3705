'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/recipes/:printMe', {
    template: '<about></about>'
  });

  $routeProvider.when('/recipes/', {
    template: '<about></about>'
  });
}
