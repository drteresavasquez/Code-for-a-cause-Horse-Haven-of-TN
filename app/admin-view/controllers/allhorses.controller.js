'use strict';

<<<<<<< HEAD
app.controller('allHorsesView', function($scope, horseFactory, FBCreds, authFactory) {
  $scope.title = "All Horses";
  
=======
app.controller('allHorsesView', function($scope, $routeParams, horseFactory, FBCreds, authFactory) {
>>>>>>> 774ec4b6c3cf3cc8a504815c00771fa22ffdcfc0
  $scope.showAllHorses = () => {
    horseFactory.getAllHorses().then(data => {
      $scope.allHorsesData = data;
      $scope.allHorseDataLength = data.length;
    });
  };

/*******************************/

    $scope.showAllEligibleHorses = () =>{
    	let ownershipSoon = [];
    	// The below is setting ownershipSoon to a new variable name in order to match with the already existing partial.
    	$scope.allHorsesData = ownershipSoon;


        horseFactory.getAllHorses()
        .then((data)=>{
            // $scope.allHorsesData = data;
            // $scope.allHorseDataLength = data.length;
	        let today = new Date();
	        let today_toMs = today.getTime();
	        console.log ("TODAY MS", today_toMs);

            
        data.forEach( function (item, index)  {
        	var oneDay = 24*60*60*1000;
	      	let dateEligibleToOwnObj = new Date(item.eligible_for_ownership_date);
	      	let dateEligibleToOwn_toMs = dateEligibleToOwnObj.getTime();
	      	let differenceOfDates = dateEligibleToOwn_toMs - today_toMs;
	      	let daysTillEligibleToOwn = Math.floor(differenceOfDates / oneDay);
	      	// console.log ("days till eligible to own", daysTillEligibleToOwn);
	            if (daysTillEligibleToOwn < 91 && daysTillEligibleToOwn > -1) {
	            	ownershipSoon.push(item);
	            	// console.log (new Date(item.eligible_for_ownership_date));
	            }
    			$scope.ownSoon = ownershipSoon.length;
        });
        console.log ("ownershipSoon", ownershipSoon);
    });

};

$scope.showAllEligibleHorses();

/*******************************/

  $scope.showAllCases = () => {
    horseFactory.getAllCases().then(data => {
      $scope.allCases = data.data;
      $scope.totalCases = Object.keys($scope.allCases);
    });
  };

  $scope.showAllHorses();
  $scope.showAllCases();

});
