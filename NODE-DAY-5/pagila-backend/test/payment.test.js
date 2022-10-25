const paymentDao = require("../dao/payment");

describe("basic tests for payment DAO", () => {
    test("create payment ", async () => {
        try{
            const newPayment = await paymentDao.createPayment({
                staff_id:2,
                rental_id:13756,
                customer_id:459,
                amount:5.90,
                payment_date:'Wed, 06 Apr 2020 17:28:39 GMT',
            });
            expect(newPayment).not.toBeNull();
        }
        catch(err){
            console.error(err);
        }
    });
});
