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

var radioInstance = BillWithRadioButtons()

function radioBillAddBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemEntered = checkedRadioBtn.value;
        
        if (billItemEntered === "call") {
            radioInstance.callTotal()
        }
        else if (billItemEntered === "sms") {
            radioInstance.smsTotal()
        }
    }

        callTotalElement.innerHTML = (radioInstance.getCallsCost()).toFixed(2);
        smsTotalElement.innerHTML = (radioInstance.getSmsCosts()).toFixed(2);
        overallTotalElement.innerHTML = (radioInstance.getCostTotal()).toFixed(2);

        theColorCode()
}  

function theColorCode() {
    overallTotalSpanElement.classList.remove("critical");
        overallTotalSpanElement.classList.remove("warning");

        if (radioInstance.getCostTotal() >= 50){
            
        overallTotalSpanElement.classList.add("critical");
        }
        else if (radioInstance.getCostTotal() >= 30 && radioInstance.getCostTotal() < 50){
        overallTotalSpanElement.classList.add("warning");
        }
        
}

radioBillAddBtn.addEventListener("click", radioBillAddBtnClicked);

