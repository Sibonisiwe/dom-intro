function BillWithRadioButtons() {

    var callCostTotalTwo = 0;
    var smsCostTotalTwo = 0;

     function callTotal(call) {
        callCostTotalTwo += 2.75;
    }

    function smsTotal(sms) {
        smsCostTotalTwo += 0.75;
    }


    function getCallsCost() {
        return callCostTotalTwo;
    }

    function getSmsCosts() {
        return smsCostTotalTwo;
    }

    function getCostTotal() {
        return callCostTotalTwo + smsCostTotalTwo;
    }

    return {
        callTotal,
        smsTotal,
        getCallsCost,
        getSmsCosts,
        getCostTotal,
        
    };
}