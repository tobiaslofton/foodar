//This code determines the total for the user depending on what options they have chsoen on the requestPage

function yourTotal() {
  var stylePrice = document.getElementById('style').value;
  console.log(stylePrice);
  document.getElementsByClassName('total').innerHTML = stylePrice;
}
//Take the stylePrice and print that in the total.
