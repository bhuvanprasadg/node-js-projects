const rentalDao = require("../dao/rental");

describe("basic tests for rental DAO", () => {
    test("create rental ", async () => {
        const newRental = await rentalDao.createRental({
            staff_id:2,
            inventory_id:1525,
            customer_id:459,
        });
        expect(newRental).not.toBeNull();
    });
});
