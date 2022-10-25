const customerDao = require("../dao/customer");

describe("basic tests for Customer DAO", () => {
    test("create customer", async () => {
        const newCustomer = await customerDao
            .createCustomer({
                store_id: 6,
                address_id: 5,
                first_name:'bhuvan',
                last_name:'prasad',
                email:'bhuvan.prasad@gmail.com',
                activebool:true,
                username:'bhuvan123',
                password:'bhuvi@123',
            })
            .catch((err) => console.log(err));

        expect(newCustomer).not.toBeNull();
    });
});
