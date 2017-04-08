
// All of our Angular code is inside a module called 'Note' which we can bind to 
// any part of our HTML.

// We're also creating a noteController with functionality to use inside an 
// element that we specify within HTML.
angular.module('Note',[]).controller('noteController',['$scope',function($scope){
  
  // Here we create an array of notes. The array will be initialized with one item.
  // Further, each item contains two note properties: 'title' and 'done'.
  $scope.notes = [{
      'title':'Build a note app',
      'done':false
  }];

  // This function will add items to the Note list
  $scope.addNote = function(){
    $scope.notes.push({'title':$scope.newNote,'done':false});
    $scope.newNote = '';
  };

  // This function will clear items from the list
  $scope.clearCompleted = function(){

    // filter() is a JS method that creates a new array with all elements
    // that pass the statement on line 24.
    $scope.notes = $scope.notes.filter(function(item){
       return !item.done;
    });
  };

}]);