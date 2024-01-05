import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';



export default function EditStudent() {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");


    useEffect(function () {

        function getStudent() {
            axios.get("http://localhost:8060/student/getone/" + id).then((res) => {

                setName(res.data.name);
                setAge(res.data.age);
                setGender(res.data.gender);


            }).catch(function (err) {
                alert("data not fech");
                alert(err);
            });
        }
        getStudent();

    }, []);

    function btnClick(e) {

        e.preventDefault();

        const updateStudent = {
            name,
            age,
            gender
        }
        console.log(updateStudent);

        axios.put("http://localhost:8060/student/update/" + id, updateStudent).then(function () {

            alert("Student Updated");

        }).catch(function () {

            alert("Student Not Updated");

        })

    }

    return (



        <div>
            <h1>Hello Edit</h1>
            <form className="create-form">

                <label>First Name</label>
                <input placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)} />

                <label>Last Name</label>
                <input placeholder='Last Name' value={age} onChange={(e) => setAge(e.target.value)} />

                <label>Last Name</label>
                <input placeholder='Last Name' value={gender} onChange={(e) => setGender(e.target.value)} />

                <button type='submit' onClick={btnClick}>Update</button>
            </form>
        </div>
    );
} 