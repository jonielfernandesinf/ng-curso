angular
    .module('diretivasNativasApp', [])
    .controller('DiretivasNativasController', diretivasNativasController);

function diretivasNativasController($scope){
    $scope.valoresDiv = {
        ehVermelho: false,
        descricaoInterna: 'Nenhuma cor aplicada',
        estiloVermelho: ''
    };

    $scope.aplicarVermelho = function(){
        $scope.valoresDiv = {
            ehVermelho: true,
            descricaoInterna: 'Vermelho aplicado',
            estiloVermelho: 'vermelho'
        };
    };

    $scope.retirarVermelho = retirarVermelho;
    $scope.alternarVermelho = alternarVermelho;

    function retirarVermelho(){
        $scope.valoresDiv.ehVermelho = false;
        $scope.valoresDiv.descricaoInterna = 'Nenhuma cor aplicada',
        $scope.valoresDiv.estiloVermelho = ''
    }

    function alternarVermelho(){
        $scope.valoresDiv.ehVermelho = !$scope.valoresDiv.ehVermelho;
        $scope.valoresDiv.descricaoInterna = 'Nenhuma cor aplicada',
        $scope.valoresDiv.descricaoInterna = $scope.valoresDiv.ehVermelho ? 'Vermelho aplicado' : 'Nenhuma cor aplicada',
        $scope.valoresDiv.estiloVermelho = $scope.valoresDiv.ehVermelho ? 'vermelho' : ''
    }
}