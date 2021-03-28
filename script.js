//A fuction to perform all the calculations when The Compute Interest Button is pressed
function compute()
{
    var principal = document.getElementById("principal").value;
    
   
    var rate = document.getElementById("rate").value;
    //converting input year into a number
    var years = parseInt(document.getElementById("year").value);
    var currentYear = new Date().getFullYear();
    var futureYear = currentYear + years; 
    
    var interest = principal*years*rate/100;
    var result = document.getElementById("result");
    
    //Check if amount is less than 0
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        result.innerHTML="";    //setting the html into the first state.
        return;
    }
    //Output text which will show on the page after button is clicked
    var outputText = "<br>"+
                    "If you deposit " + "<mark>" + principal + "</mark>" + "," +
                    "<br>" + 
                    "at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + 
                    "<br>" + 
                    "You will receive an amount of " + "<mark>" + interest + "</mark>" +"," +
                     "<br>"+
                    "in the year " + "<mark>" + futureYear + "</mark>" +
                    "<br>"
    
    result.innerHTML = outputText;
    return;
}

//A function to show the rate when the slider is moved

function slider(){
    var slider = document.getElementById("rate");
    var output = document.getElementById("output-rate");
    output.innerHTML = slider.value;

    slider.oninput = function() {
	    output.innerHTML = this.value;
    }

}
