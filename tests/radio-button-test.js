describe("the radio button bill factory function", function() {

    describe("add values", function() {
        it("should be able to add calls total cost", function() {
            
            let radioBill = BillWithRadioButtons();

            radioBill.callTotal(2.75);
            radioBill.callTotal(2.75);
            radioBill.callTotal(2.75);
            radioBill.callTotal(2.75);
            radioBill.callTotal(2.75);
            
            assert.equal(13.75, radioBill.getCostTotal());
            assert.equal(13.75, radioBill.getCallsCost());
            assert.equal(0.00, radioBill.getSmsCosts());

        });

        it("should be able to add SMS total cost", function() {
            
            let radioBill = BillWithRadioButtons();

            radioBill.smsTotal(0.75);
            radioBill.smsTotal(0.75);
            radioBill.smsTotal(0.75);
            radioBill.smsTotal(0.75);
            radioBill.smsTotal(0.75);
            

            

            assert.equal(3.75, radioBill.getCostTotal());
            assert.equal(0.00, radioBill.getCallsCost());
            assert.equal(3.75, radioBill.getSmsCosts());

        });

        it("should be able to add calls and SMS's total cost", function(){

            let radioBill = BillWithRadioButtons();

            radioBill.smsTotal(0.75);
            radioBill.callTotal(2.75);
            radioBill.smsTotal(0.75);
            radioBill.smsTotal(0.75);
            radioBill.smsTotal(0.75);
            radioBill.callTotal(2.75);

            assert.equal(8.50, radioBill.getCostTotal());

        });
    });
});