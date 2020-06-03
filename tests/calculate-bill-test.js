describe("the calculate bill with factory function", function () {

    describe("enter bill string", function () {

        it("should be able to enter a string of calls", function () {


            let calculateBill = BillWithString();

            assert.equal(calculateBill.totalPhoneBill('call,call,call,call,call'), 13.75);


        });

        it("should be able to enter a string of sms's", function () {

            let calculateBill = BillWithString();

            assert.equal(calculateBill.totalPhoneBill('sms,sms,sms,sms,sms,sms,sms'), 5.25);
        });
    });

});