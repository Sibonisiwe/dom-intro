// get a reference to the sms or call radio buttons
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callCostSetting  = document.querySelector(".callCostSetting");
const smsCostSetting  = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
const addButton = document.querySelector(".addButton");
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");
//get a refference to the overall  bill total
const totalSettings = document.querySelector(".totalSettings");
//get refference to change the color of the R in total settings
const totalSettingsSpan = document.querySelector(".orangeTwo");  
// create a variables that will keep track of all the settings
var callsCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

   
function addButtonClicked(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (totalCost< criticalLevel) {
    if (checkedRadioBtn){
        var billItemChecked = checkedRadioBtn.value;
    // get the value entered in the billType textfield
    
   if (billItemChecked === "call"){
       callsTotal += callsCost;
   }
   else if (billItemChecked === "sms"){
       smsTotal += smsCost;
   } 
    }

   //update the totals that is displayed on the screen.
   callTotalSettings.innerHTML = callsTotal.toFixed(2);
   smsTotalSettings.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
   totalSettings.innerHTML = totalCost.toFixed(2);

   colorCode()
}
}

function updateSettingsClicked(){
callsCost = Number(callCostSetting.value);
smsCost = Number(smsCostSetting.value);
criticalLevel = Number(criticalLevelSetting.value);
warningLevel = Number(warningLevelSetting.value);

colorCode()

}

function colorCode(){
    totalSettingsSpan.classList.remove("danger");
totalSettingsSpan.classList.remove("warning");
    if (totalCost >= criticalLevel){
   // adding the danger class will make the text red
   totalSettingsSpan.classList.remove("warning");
   totalSettingsSpan.classList.add("danger");
    }
    else if (totalCost >= warningLevel && totalCost < criticalLevel){
        totalSettingsSpan.classList.remove("danger");
        totalSettingsSpan.classList.add("warning");
    }
}



//add an event listener for when the add button is pressed
addButton.addEventListener("click", addButtonClicked);

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", updateSettingsClicked);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
