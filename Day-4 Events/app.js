const app = angular.module("myMod", []);
app.controller("myCtrl", function ($scope) {
  $scope.students = [
    {
      name: "Alice",
      age: 20,
      grade: "A",
    },
    {
      name: "Bob",
      age: 22,
      grade: "B+",
    },
    {
      name: "Charlie",
      age: 19,
      grade: "A-",
    },
    {
      name: "Diana",
      age: 21,
      grade: "B",
    },
    {
      name: "Eva",
      age: 18,
      grade: "A",
    },
    {
      name: "Frank",
      age: 23,
      grade: "C",
    },
    {
      name: "Grace",
      age: 20,
      grade: "B-",
    },
    {
      name: "Henry",
      age: 24,
      grade: "A+",
    },
    {
      name: "Ivy",
      age: 19,
      grade: "B",
    },
    {
      name: "Jack",
      age: 22,
      grade: "A-",
    }
  ];

  $scope.myfunction = function(x){
    $scope.order=x;
  };
});
