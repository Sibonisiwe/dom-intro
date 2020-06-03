// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");
//get a reference to the call total
const callsTotalElem = document.querySelector(".callTotalOne");
//get a reference to ythe sms total
const smsTotalElem = document.querySelector(".smsTotalOne");
//get refence to overall total
const totalCostElem = document.querySelector(".totalOne");
const totalCostSpanElem = document.querySelector(".red");
//create a variable that will keep track of the total
var callsTotal = 0;
var smsTotal = 0;

function textTotalAddBtnClicked(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    totalCostSpanElem .classList.remove("danger");
    totalCostSpanElem .classList.remove("warning");
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostSpanElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostSpanElem.classList.add("warning");
    }
}
        
    textTotalAddBtn.addEventListener("click", textTotalAddBtnClicked);
        

    
//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
