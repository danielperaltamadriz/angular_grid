(function() {
  'use strict';

  angular
    .module('app.grid')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'grid',
        config: {
          url: '/grid',
          templateUrl: 'app/grid/grid.html',
          controller: 'gridController',
          controllerAs: 'vm',
          title: 'Grid',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Grid'
          }
        }
      }
    ];
  }
})();
