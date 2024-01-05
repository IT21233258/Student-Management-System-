import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink, props } from 'react-router-dom'


export default function AllStudent() {

    //class component waladi componentdidmount
    //session json with tocken
    const [students, setStudents] = useState([]);

    useEffect(function () {

        function getStudent() {
            axios.get("http://localhost:8060/student/read").then(function (res) {

                console.log(res.data);

                setStudents(res.data);


            }).catch(function (err) {
                alert("data not fech");
            })
        }
        getStudent();

    }, [])


    return (
        <div className="container">

            <h1>All student</h1>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (

                        <tr>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td><a href={'/edit/' + student._id}>Update</a></td>
                            <td><a href={'/delete/' + student._id}>Delete</a></td>

                        </tr>
                    ))}

                </tbody>




            </table>



        </div >
    )


}
