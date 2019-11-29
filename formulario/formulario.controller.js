angular
    .module('app', [])
    .controller('FormularioController', formularioController);

function formularioController($scope, $window){
    $scope.nomeFormulario = '';

    /**
     * @description Simula o salvamento dos dados do formulário
    */
   $scope.salvar = function(){
        $scope.nomeFormulario = '';
        $window.alert('Operação realizada com sucesso!');
   }
}