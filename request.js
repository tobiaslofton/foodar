//This code determines the total for the user depending on what options they have chsoen on the requestPage
var priceCheck = document.getElementById("priceChange");

priceCheck.addEventListener("click", yourTotal);

// Declare a function that stores all elements with the same class in a variable. Iterate through each of the elements if one of them is checked convert that number and store it in a variable.
function yourTotal() {


  var stylePrice = document.getElementsByClassName('style');
  for (i = 0; i < stylePrice.length; i++) {
    if (stylePrice[i].checked) {
      result = Number(stylePrice[i].value);
      console.log(result);
    }
  }



  var stylePrice = document.getElementsByClassName("percent");
  for (i = 0; i < stylePrice.length; i++) {
    if (stylePrice[i].checked && result > 0) {
      result *= (1 + stylePrice[i].value / 100);
      console.log(result);
    }
  }



  result = Number(result.toFixed(2));

  var answer = document.getElementById("result");
  answer.innerHTML = "$" + result;
}
//Take the stylePrice and print that in the total.

document.append(getElementById("logo"));
/*var styleArr = document.getElementsByClassName("food-style");
	for (i=0; i < styleArr.length; i++){
		if (styleArr[i].checked){
			result = Number(styleArr[i].value);
		}
	}*/
