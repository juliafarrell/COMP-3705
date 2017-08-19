'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/recipes/:printMe', {
    template: '<recipes></recipes>'
  });

  $routeProvider.when('/recipes/', {
    template: '<recipes></recipes>'
  });
}
