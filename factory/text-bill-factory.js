function BillWithText() {

    var callTotalOne = 0;
    var smsTotalOne = 0;

    function callCostTotal(callCost) {
        callTotalOne += 2.75;
    }

    function getCallCost() {
        return callTotalOne;
    }

    function getCostTotal() {
        return callTotalOne + smsTotalOne;
    }

    function smsCostTotal(smsCost) {
        smsTotalOne += 0.75;
    }

    function getSmsCost() {
        return smsTotalOne;
    }

    return {
        callCostTotal,
        getCallCost,
        getCostTotal,
        smsCostTotal,
        getSmsCost
    }
}