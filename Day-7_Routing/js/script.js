const app = angular.module("routing", ["ngRoute"]);
app.controller("navbar", function ($scope) {
  $scope.navItems = [
    {
      label: "Home",
      to: "#!Main",
    },
    {
      label: "Service",
      to: "#!Service",
    },
    {
      label: "Projects",
      to: "#!Projects",
    },
    {
      label: "About Us",
      to: "#!AboutUs",
    },
  ];
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./view/Main.html",
    })
    .when("/Service", {
      templateUrl: "./view/Service.html",
    })
    .when("/Projects", {
      templateUrl: "./view/Projects.html",
    })
    .when("/AboutUs", {
      templateUrl: "./view/AboutUs.html",
    })
    .otherwise("./view/Main.html");
});