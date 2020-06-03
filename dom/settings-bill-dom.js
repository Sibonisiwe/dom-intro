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

var settingsInstance = BillWithSettings();

function updateSettingsClicked() {
    
    settingsInstance.setCallCost(Number(callCostSetting.value));
    settingsInstance.setSmsCost(Number(smsCostSetting.value));
    settingsInstance.setWarningLevel(Number(warningLevelSetting.value));
    settingsInstance.setCriticalLevel(Number(criticalLevelSetting.value));

    colorCode()
} 

function addButtonClicked() {
    
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    
    if (checkedRadioBtn) {
        var billItemChecked = checkedRadioBtn.value;
    
   if (billItemChecked === "call") {
       settingsInstance.makeCall()
   }
   else if (billItemChecked === "sms") {
       settingsInstance.sendSms()
   } 
   colorCode()

   callTotalSettings.innerHTML = (settingsInstance.getCallCost()).toFixed(2);
   smsTotalSettings.innerHTML = (settingsInstance.getSmsCost()).toFixed(2);
   totalSettings.innerHTML = (settingsInstance.getTotalCost()).toFixed(2);
}
    }

    function colorCode() {

        totalSettingsSpan.classList.remove("critical");
        totalSettingsSpan.classList.remove("warning");
        totalSettingsSpan.classList.add(settingsInstance.totalClassName());

    }





//add an event listener for when the add button is pressed
addButton.addEventListener("click", addButtonClicked);

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", updateSettingsClicked);