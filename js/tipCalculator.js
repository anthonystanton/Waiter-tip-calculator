// Calcualte tip
function calculateTip() {
    // Assigning values 
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let numberOfPeople = document.getElementById("peopleAmount").value;

    // Checking input is correct
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }
    // Checking to see if the input is empty or less than or equal to 1
    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Calculating the tip
    let total = (billAmount * serviceQuality) / numberOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };