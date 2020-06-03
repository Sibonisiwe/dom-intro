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

textBillInstance = BillWithText();

function textTotalAddBtnClicked() {

    var billTypeEntered = billTypeText.value.trim();
    
    if (billTypeEntered === "call"){
        textBillInstance.callCostTotal();
    }
    else if (billTypeEntered === "sms"){
        textBillInstance.smsCostTotal()
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = (textBillInstance.getCallCost()).toFixed(2);
    smsTotalElem.innerHTML = (textBillInstance.getSmsCost()).toFixed(2);
    totalCostElem.innerHTML = (textBillInstance.getCostTotal()).toFixed(2);
    
    theCodeColor()
}

function theCodeColor(){

    totalCostSpanElem .classList.remove("critical");
    totalCostSpanElem .classList.remove("warning");

    if (textBillInstance.getCostTotal() >= 50){
        totalCostSpanElem.classList.add("critical");
    }
    else if (textBillInstance.getCostTotal() >= 30 && textBillInstance.getCostTotal() < 50){
        totalCostSpanElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener("click", textTotalAddBtnClicked);
