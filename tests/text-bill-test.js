describe("the text bill factory function", function() {

    describe("add values", function() {
        it("should be able to add calls total cost in the text box", function() {
            
            let textBill = BillWithText();

            textBill.callCostTotal(2.75);
            textBill.callCostTotal(2.75);
            textBill.callCostTotal(2.75);
            textBill.callCostTotal(2.75);
            textBill.callCostTotal(2.75);
            textBill.callCostTotal(2.75);
            
            assert.equal(16.50, textBill.getCostTotal());
            assert.equal(16.50, textBill.getCallCost());

        });

        it("should be able to add sms total cost in the text box", function() {
            
            let textBill = BillWithText();

            textBill.smsCostTotal(0.75);
            textBill.smsCostTotal(0.75);
            textBill.smsCostTotal(0.75);
            textBill.smsCostTotal(0.75);
            textBill.smsCostTotal(0.75);
            textBill.smsCostTotal(0.75);
            
            assert.equal(4.50, textBill.getCostTotal());
            assert.equal(4.50, textBill.getSmsCost());


        });

        
    });
});    