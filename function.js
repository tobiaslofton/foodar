
// This function checks to see if the zipcode entered is valid. 
function validateZip(){
   var zip = document.getElementById('zipper').value;

   if (zip < 20000) {
     alert('Please enter a valid ZipCode');
     return false;
   }
}
