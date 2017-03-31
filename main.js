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

//function that adds, subtracts, multiplies and divides

function runMath(num1, num2, num3, num4, nun5){
  var USmonthly = num1 + num2 + num3 + num4 + num5; //get monthly cost
  var USdaily = USmonthly/30;

	console.log("USmonthly", USmonthly);

	$("#final-results").find("li").each(function(){
		var country= $(this);
		var dailycost = parseFloat(country.data("perdaycost"));
    var ratio= USdaily/dailycost;
		var dailyInt= Math.floor(ratio*30);
		console.log("Country", country, "dc", dailycost, "ratio", ratio, "dailyInt", dailyInt);
		country.find("span").text(dailyInt);
	})
}
