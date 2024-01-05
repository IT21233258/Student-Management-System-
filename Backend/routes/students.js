//import router pacage
const router = require("express").Router();

const { request } = require("express");
//import models student js
let Student = require("../models/student");


//add data 
router.route("/add").post((req, res) => {

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    });

    //then() js promice
    newStudent.save().then(function () {
        //give response json format
        res.json("student added success");

    }).catch(function (err) {

        console.log(err);

    })



})


//read data
router.route("/read").get(function (req, res) {

    Student.find().then((students) => {

        res.json(students);

    }).catch(function (err) {

        console.log(err);

    })
})


//update data
router.route("/update/:id").put(async function (req, res) {

    let userId = req.params.id;

    /*
        const name=req.params.name;
        const age=req.params.age;
        const gender=req.params.gender;\
     */

    //destructure
    const { name, age, gender } = req.body;

    const updateStudent = {

        name,
        age,
        gender

    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {

        res.status(200).send({ status: "User Updated" });

    }).catch(function (err) {

        console.log(err);
        res.status(500).send({ status: "Not updated", error: err.massage });

    })



})


router.route("/delete/:id").delete(async function (req, res) {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(function () {

        res.status(200).send({ status: "User Id Deleted" });

    }).catch(function (err) {

        console.log(err);
        res.status(500).send({ status: "Delete unsuccessfull please try again", error: err.massage });

    })

})

//user profile
router.route("/getone/:id").get(async function (req, res) {
    let userId = req.params.id;

    const user = await Student.findById(userId).then(function (student) {

        res.json(student);

        // res.status(200).send({ status: "user data fech success", res. });

    }).catch(function () {

        console.log(err);
        res.status(500).send({ status: "error", error: err.massage });

    })
})

//export module
module.exports = router;


