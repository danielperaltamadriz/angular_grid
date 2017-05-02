(function () {
  'use strict';

  angular
    .module('app.grid')
    .controller('gridController', GridController);

  /* @ngInject */
  function GridController(logger) {
    var vm = this;
    vm.title = 'Grid';
    var defaultContained = false;
    var defaultClassification = 'Select';
    var defaultDescription = '';

    vm.continue = nextstep;
    vm.isCollapsed = [];
    vm.assets = [{
      name: "Laptop",
      dataInformation: [getDataType('IP'),
      getDataType('PII'),
      getDataType('PHI'),
      getDataType('Financial'),
      getDataType('CT'),
      getDataType('Intel Federal')]
    },
    {
      name: "Cellphone",
      dataInformation: [getDataType('IP'),
      getDataType('PII'),
      getDataType('PHI'),
      getDataType('Financial'),
      getDataType('CT'),
      getDataType('Intel Federal')]
    },
    {
      name: "Tablet",
      dataInformation: [getDataType('IP'),
      getDataType('PII'),
      getDataType('PHI'),
      getDataType('Financial'),
      getDataType('CT'),
      getDataType('Intel Federal')]
    }];
    vm.grids = [];
    vm.getGrid = getGrid;


    function setGrid() {
      return {
        enableSorting: true,
        //rowTemplate:'<div>',
        columnDefs: [
          { name: 'Information Type', field: 'informationType', cellTemplate: '<div class="ui-grid-cell-contents"><label>{{row.entity.informationType}}</label></div>' },
          { name: 'Contained?', field: 'contained', cellTemplate: '<input type="checkbox" ng-model="row.entity.contained"></input>' },
          { name: 'Classification', field: 'classification', enableSorting: false, cellTemplate: '<div><select ng-disabled="!row.entity.contained" ng-options="classification for classification in [\'Select\', \'Confidential\', \'Top Secret\']" ng-model="row.entity.classification"></select></div>' },
          { name: 'description', field: 'description', cellTemplate: '<div ><input ng-disabled="!row.entity.contained" ng-model="row.entity.description"></input></div>' }
        ]
      };
    }

    function getDataType(dataType) {
      return {
        informationType: dataType,
        contained: defaultContained,
        classification: defaultClassification,
        description: defaultDescription
      };
    }

    function getGrid(index) {        
      return vm.grids[index];
    }

    function nextstep(){
      debugger;
    }


    activate();

    function activate() {
      for (var i = 0; i < vm.assets.length; i++) {
        vm.isCollapsed[i] = false;
        vm.grids[i] = setGrid();
        vm.grids[i].data = vm.assets[i].dataInformation;
      }
      logger.info('Activated Grid View');
    }
  }
})();
