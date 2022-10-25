const express = require("express");
const router = express.Router();
const studentsData = require("../db/students");
const jwtUtil = require("../security/jwt")

router.use(jwtUtil.checkToken);

router.get('/',(req, res) => {

    studentsData.getAllStudents().then((data) => {
        res.json(data.rows);
    }).catch((err) => {
        res.json({ error: err });
    });
});

router.get('/:id',(req, res) => {

    studentsData.getStudentById(req.params.id).then((data) => {
        res.json(data.rows);
    }).catch((err) => {
        res.json({ error: err });
    });
});

module.exports = router;