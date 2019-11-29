angular
    .module('app', [])
    .controller('ControladorController', controladorController);

function controladorController($scope){
    $scope.nome = 'Joniel Fernandes';
    $scope.quantidadeCliques = 0;

    /**
     *  @description Comentário qualquer  
     */
    $scope.contarCliques = function(){
        $scope.quantidadeCliques = $scope.quantidadeCliques + 1;
    };
}