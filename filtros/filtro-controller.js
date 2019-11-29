angular
    .module('app', ['filtrosApp'])
    .controller('FiltroController', filtroController);

function filtroController($scope){
    $scope.cpfDigitado = '02545698474';
}