angular
    .module('app', [])
    .controller('LoopController', loopController);

function loopController($scope){
    $scope.frutas = ['banana', 'maçã', 'laranja'];
}