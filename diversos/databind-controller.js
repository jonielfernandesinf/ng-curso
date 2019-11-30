angular
    .module('appDatabind', ['filtrosApp'])
    .controller('DatabindController', databindController);

function databindController($scope){
    $scope.valor = 0;
}