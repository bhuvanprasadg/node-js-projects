const pool = require("./pool");

async function getAllStudents() {
  const client = await pool.connect();
  try {
    const text = "SELECT * FROM STUDENTS";
    const response = await client.query(text, []);
    return response;
  } finally {
    client.release();
  }
}

async function getStudentById(student_id) {
  const client = await pool.connect();
  try {
    const text =
      "select s.student_id, name, title, borrowing_date, books.book_id, b.borrowings_id, bb.book_borrowings_id from borrowings b inner join students s on s.student_id = b.student_id inner join book_borrowings bb on bb.borrowings_id = b.borrowings_id inner join books on books.book_id = bb.book_id where s.student_id = $1";
    const response = await client.query(text, [student_id]);
    return response;
  } finally {
    client.release();
  }
}

module.exports = { getAllStudents, getStudentById };
