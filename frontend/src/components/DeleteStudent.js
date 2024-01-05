import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';


export default function DeleteStudent() {

    const { id } = useParams();
    const log = useRef(true);


    useEffect(function () {

        if (log.current) {
            function getStudent() {


                axios.delete("http://localhost:8060/student/delete/" + id).then(function (res) {
                    log.current = false;
                    alert("Delete Successfull");


                }).catch(function (err) {
                    alert("delete Fail");
                });
                log = false;


            }
            getStudent();


        }

    }, []);




}