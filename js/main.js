var app = angular.module('BeyonceApp', []);

app.controller('MainCtrl', function ($scope) {
  $scope.name = 'Mark';

  $scope.sorting = {
    ascend: true,
    by: 'date'
  };

  $scope.categoryFilter = function(filter) {
    if (filter) {
      if ($scope.selectedCategory === '') {
        $scope.selectedCategory = filter;
      } else {
        $scope.selectedCategory = '';
      }
    } else {
      $scope.selectedCategory = '';
    }
  };

  $scope.availableCategories = ['News', 'Danger', 'Relationships'];

  $scope.tabloids = [
    {
      image: 'http://placebeyonce.com/201-300',
      headline: 'Beyonce Marries Jay-Z',
      content: 'Shoot guys. The knot has been tied.',
      date: '2015-05-01',
      categories: ['News', 'Relationships']
    },
    {
      image: 'http://placebeyonce.com/200-300',
      headline: 'Beyonce Gets Pissed!',
      content: 'She\'s dangerous and out of control!',
      date: '2015-01-02',
      categories: ['News', 'Danger']
    },
    {
      image: 'http://placebeyonce.com/200-301',
      headline: 'Beyonce. Again. Just No.',
      content: 'I don\'t even know.',
      date: '2015-02-10',
      categories: ['Relationships']
    },
    {
      image: 'http://placebeyonce.com/199-300',
      headline: 'Oh No, Beyonce Di\'n\'t!',
      content: 'She\'s at it again, folks. Look out.',
      date: '2015-03-04',
      categories: ['News', 'Danger', 'Relationships']
    }

  ];

});


app.directive('sortButton', function(){
  return {
    restrict: 'E',
    scope: {
      text: '@',
      value: '@',
      sort: '='
    },
    templateUrl: 'sort-button.html',
    link: function(scope) {
      scope.sortBy = function(byWhat) {
        scope.sort.by = byWhat;
        scope.sort.ascend = !scope.sort.ascend;
      };
    }
  };
});


