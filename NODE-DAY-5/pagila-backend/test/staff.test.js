const staffDao = require("../dao/staff");

describe("basic tests for staff DAO", () => {
    test("create staff", async () => {
        const newStaff = await staffDao
            .createStaff({
                staff_id: 10,
                address_id: 5,
                first_name:'vishnu',
                last_name:'vardhan',
                email:'vishnu@gmail.com',
                active:true,
                username:'vishnu111',
                password:'vish@123',
                store_id:5,
            })
            .catch((err) => console.log(err));

        const newStaff2 = await staffDao
            .createStaff({
                staff_id: 11,
                address_id: 6,
                first_name:'rohith',
                last_name:'gorre',
                email:'rohith@gmail.com',
                active:true,
                username:'rohith111',
                password:'ro@123',
                store_id:6,
            })
            .catch((err) => console.log(err));

        expect(newStaff).not.toBeNull();
        expect(newStaff2).not.toBeNull();
    });
});
