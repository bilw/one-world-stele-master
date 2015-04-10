steleApp.controller("SteleImageController", SteleImageController);

function SteleImageController( $scope ){

	$scope.new_mudra = {};
	$scope.add_mudra_error = "";

	$scope.mudras = [
	{fullname: 'William Weis', title: 'title', email: '', wish: 'test wish', date: '04-01-2015', imageurl: 'images/IMG_0487.jpg'},
	{fullname: 'Full Name', title: 'title', email: '', wish: 'test wish', date: '04-01-2015', imageurl: 'images/IMG_0488.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{fullname: '', title: '', email: '', wish: 'test wish', date: '04-02-2015', imageurl: 'images/IMG_0494.jpg'}
	];

	$scope.addMudra = function( new_mudra ){
		if (!new_mudra.fullname) 
		{
			$scope.add_mudra_error = "Missing title";
		}
		// else if (!new_mudra.date || !is_valid_date(new_mudra.date))
		// {
		// 	$scope.add_mudra_error = "You must provide a date in format yyyy/mm/dd";
		// }
		// else if (!new_mudra.description)
		// {
		// 	$scope.add_mudra_error = "Missing description";
		// }
		// else if (!new_mudra.name)
		// {
		// 	$scope.add_mudra_error = "Missing name - six characters";
		// }
		else {
			$scope.mudras.push( new_mudra );
			$scope.adding_mudra = {};
			$scope.add_mudra_error = "";
		};
	};
};



function is_valid_date (the_date){
		//http://eloquentjavascript.net/09_regexp.html
		if (the_date.match(/^[0-9]{4,4}\/[0-9]{2,2}\/[0-9]{2,2}$/)){
			var d = new Date(the_date);
			return !(isNaN(d.getTime()));
		} else {
			return false;
		};
	};