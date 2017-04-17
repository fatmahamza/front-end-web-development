/* 
All of our Angular code is inside a module called 'Note' which we can bind to any part
of our HTML. We have binded it to the <html> element. 
*/

// To simplify our code and make it more readable, we'll assign the module to a variable
// called app.
var app = angular.module('Note',[]);

// We're also creating a noteController with functionality to use inside a specified
// HTML element. Angular has a controller function that takes two parameters - a string
// and a function.
app.controller('noteController', function($scope) {

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
    // that pass the statement on line 56.
    $scope.notes = $scope.notes.filter(function(item){
       return !item.done;
    });
  };

});