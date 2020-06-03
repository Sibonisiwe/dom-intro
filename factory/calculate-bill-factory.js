function BillWithString() {

    function totalPhoneBill(billString) {

        var billTotal = 0;

        var list = billString.split(",");
        for (var i = 0; i < list.length; i++) {
            var billItem = list[i].trim();

            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }

        }
        return billTotal;
    }

    return {
        totalPhoneBill,
    };
}