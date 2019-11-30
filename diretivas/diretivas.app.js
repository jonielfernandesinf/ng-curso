angular
    .module('diretivaApp', [])
    .directive('primeiraDiretiva', primeiraDiretiva);

function primeiraDiretiva(){
    return {
        restrict: 'AECM',
        template: '<p>Fiz minha primeira diretiva!!',
        replace: true //restrict M so funciona com o replace true
    };
}