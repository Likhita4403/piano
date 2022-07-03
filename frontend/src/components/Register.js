import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import './Signup.css';
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const writeUsers = () => {
    if (name && email && password && (password === confirm_password)) {
      Axios.post("http://localhost:3001/writeUsers", {
        name,
        email,
        password,
        confirm_password
      }).then((response) => {
        setListOfUsers([
          ...listOfUsers,
          {
            name,
            email,
            password,
            confirm_password
          },
        ]);
        if (response.data.status === "ok") {
          navigate('/')
        }
      });
    } else {
      alert("invalid inputs")
    }
  }
  return (
    <div className="w-50 container-fluid text-white" >
      <h1 className='display-3 text-center'>REGISTER</h1>
      <div className="me-5  text-center  d-flex justify-content-center">
        <div className="border border-primary rounded py-5 w-75 ">
          <div className='d-flex justify-content-evenly'>
            <label className="display-6 mt-1">Name</label>
            <input
              className="m-3 py-2 w-50"
              type="text"
              onChange={(event) => {
                setname(event.target.value);
              }}
            />
          </div>
          <br />
          <div className='d-flex justify-content-evenly'>
            <label className="display-6 mt-1">Email</label>
            <input
              type="text"
              className="m-3 py-2 w-50"
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />
          </div>
          <br />
          <div className='d-flex justify-content-evenly'>
            <label className="display-6 mt-1">Password</label>
            <input
              className="m-3 py-2 w-50"
              type="text"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            />
          </div>
          <br />
          <div className='d-flex justify-content-evenly'>
            <label className="display-6 mb-3">Confirm Password</label>
            <input
              className="m-3 py-2 w-50"
              type="text"
              onChange={(event) => {
                setconfirm_password(event.target.value);
              }}
            />
          </div>
          <br />
          <button
            className="my-3 px-5 btn btn-lg btn-primary"
            onClick={writeUsers}
          >
            {" "}
            Create User{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
