const app = angular.module('myModule', []);
        app.controller('myCtrl', function ($scope) {
            $scope.products = [
                {
                    product: "Keyboard",
                    price: 1300
                },
                {
                    product: "Mouse",
                    price: 699
                },
                {
                    product: "Laptop Stand",
                    price: 499
                },
    
                {
                    product: "Monitor",
                    price: 8999
                },
    
                {
                    product: "Mouse Pad",
                    price: 299
                }
            ]
        });

       /* 
        */