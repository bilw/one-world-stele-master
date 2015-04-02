function SteleImageController( $scope ){

	$scope.new_album = {};
	$scope.add_portfolio_error = "";

	$scope.mudras = [
	{name: 'first', date: '04-01-2015', imageurl: 'images/IMG_0487.jpg'},
	{name: 'second', date: '04-01-2015', imageurl: 'images/IMG_0488.jpg'},
	{name: 'third', date: '04-02-2015', imageurl: 'images/IMG_0491.jpg'},
	{name: 'fourth', date: '04-02-2015', imageurl: 'images/IMG_0494.jpg'}
	];

	$scope.addPortfolio = function( new_portfolio ){
		if (!new_portfolio.title) 
		{
			$scope.add_portfolio_error = "Missing title";
		}
		else if (!new_portfolio.date || !is_valid_date(new_portfolio.date))
		{
			$scope.add_portfolio_error = "You must provide a date in format yyyy/mm/dd";
		}
		else if (!new_portfolio.description)
		{
			$scope.add_portfolio_error = "Missing description";
		}
		else if (!new_portfolio.name)
		{
			$scope.add_portfolio_error = "Missing name - six characters";
		}
		else {
			$scope.portfolios.push( new_portfolio );
			$scope.adding_portfolio = {};
			$scope.add_portfolio_error = "";
		};
	};
};

steleApp.controller("SteleImageController", SteleImageController);

function is_valid_date (the_date){
		//http://eloquentjavascript.net/09_regexp.html
		if (the_date.match(/^[0-9]{4,4}\/[0-9]{2,2}\/[0-9]{2,2}$/)){
			var d = new Date(the_date);
			return !(isNaN(d.getTime()));
		} else {
			return false;
		};
	};