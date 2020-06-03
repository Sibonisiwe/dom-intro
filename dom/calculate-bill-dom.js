//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringField = document.querySelector(".billString");
//get reference to the totalSpan
const billTotalSpanElement = document.querySelector(".total");
//create the function that will be called when the calculate button is pressed

var calculateInstance = BillWithString();

function calculateBill() {

    var stringValue = billStringField.value;
    var grandTotal = calculateInstance.totalPhoneBill(stringValue)

    billTotalSpanElement.classList.remove("critical");
    billTotalSpanElement.classList.remove("warning");

    if (grandTotal >= 30) {
        billTotalSpanElement.classList.add("critical");
    }
    else if (grandTotal >= 20 && grandTotal < 30) {
        billTotalSpanElement.classList.add("warning");
    }

    billTotalSpanElement.innerHTML = grandTotal.toFixed(2)
}

calculateBtn.addEventListener("click", calculateBill);