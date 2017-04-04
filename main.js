//declare variables
var sum,
	difference,
	product,
	quotient,
	rounded,
  num1,
  num2;


// when someone clicks on the compute, get number 1 input abd get number 2 input

$(document).ready(function () { //on DOM ready, bind clicks
	//get value of input fields
	$("#mathIt").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
    num1 = parseFloat($("#number1").val()); //store the number of input into num1
    num2 = parseFloat($("#number2").val()); //store the number of input into num2
    num3 = parseFloat($("#number3").val()); //store the number of input into num3
    num4 = parseFloat($("#number4").val()); //store the number of input into num4
		num5 = parseFloat($("#number5").val()); //store the number of input into num5

    console.log("The number 1 is :", num1, "The number 2 is:",  num2, "The number 3 is:",  num3, "The number 4 is:",  num4);

    //call runMath function
    runMath(num1, num2, num3, num4, num5);

    }); // closes mathIt
  });//closes document ready

//function that adds and divides

function runMath(num1, num2, num3, num4, nun5){
  var USmonthly = num1 + num2 + num3 + num4 + num5; //get monthly cost
  var USdaily = USmonthly/30; //get dailly cost

	console.log("USmonthly", USmonthly);

	$("#final-results").find("li").each(function(){
		var country= $(this);
		var dailycost= parseFloat(country.data("perdaycost"));
    var ratio= USdaily/dailycost;//get ratio of daily US cost to days
		var dailyInt= Math.floor(ratio*30); //rounds days
		console.log("Country", country, "dc", dailycost, "ratio", ratio, "dailyInt", dailyInt);
		country.find("span").text(dailyInt);
	})
}
// the following are potential "days to" calendars. not sure if they work

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function runMath(someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
var someDate = new Date();
var numberOfDaysToAdd = 6;

var dd = someDate.getDate();
var mm = someDate.getMonth() + 1;
var y = someDate.getFullYear();

var someFormattedDate = dd + '/'+ mm + '/'+ y;
