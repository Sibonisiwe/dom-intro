// get a reference to the sms or call radio buttons
const callTotalElement = document.querySelector(".callTotalTwo");
const smsTotalElement = document.querySelector(".smsTotalTwo");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const overallTotalElement = document.querySelector(".totalTwo");
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//create a variable that will change color of total
const overallTotalSpanElement = document.querySelector(".orange");

var callsTotalTwo = 0;
var smsTotalTwo = 0;


function radioBillAddBtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemEntered = checkedRadioBtn.value;
         // get the value entered in the billType textfield
    
        //update the correct total
        if (billItemEntered === "call"){
            callsTotalTwo += 2.75
        }
        else if (billItemEntered === "sms"){
            smsTotalTwo += 0.75;
        }
    }
        
        //update the totals that is displayed on the screen.
        callTotalElement.innerHTML = callsTotalTwo.toFixed(2);
        smsTotalElement.innerHTML = smsTotalTwo.toFixed(2);
         overallTotal = callsTotalTwo + smsTotalTwo;
        overallTotalElement.innerHTML = overallTotal.toFixed(2);
        
        overallTotalSpanElement.classList.remove("danger");
        overallTotalSpanElement.classList.remove("warning");
    if (overallTotal >= 50){
        // adding the danger class will make the text red
    overallTotalSpanElement.classList.add("danger");
    }
    else if (overallTotal >= 30){
    overallTotalSpanElement.classList.add("warning");
    }
}


//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener("click", radioBillAddBtnClicked);
    
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

