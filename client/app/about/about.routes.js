'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/about/:printMe', {
    template: '<about></about>'
  });

  $routeProvider.when('/about/', {
    template: '<about></about>'
  });
}
