const pool = require("./pool");

async function getAllBooks(){
    // let offset = (pageSize*pageNum) - pageSize;
    const client = await pool.connect();
    try{
        const text = "SELECT * FROM BOOKS";
        const response = await client.query(text, []);
        return response;
    } finally{
        client.release();
    }
}

module.exports = {getAllBooks};