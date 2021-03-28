function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("year").value);
    var currentYear = new Date().getFullYear();
    var futureYear = currentYear + years; 
    var interest = principal*years*rate/100;
    var result = document.getElementById("result");
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
}
function slider(){
    var slider = document.getElementById("rate");
    var output = document.getElementById("output-rate");
    output.innerHTML = slider.value;

    slider.oninput = function() {
	    output.innerHTML = this.value;
    }

}
