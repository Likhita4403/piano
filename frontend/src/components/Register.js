import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import './Signup.css';

function Register() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const writeUsers = () => {
    Axios.post("http://localhost:3001/writeUsers", {
      name,
      email,
      password,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          email,
          password,
        },
      ]);
    });
  };

  return (
    <div className="w-50 container-fluid">
      <div className="me-5 my-3 text-center ">
        <div className="border border-primary rounded py-5 ">
          <label className="display-6 align-baseline">Name</label>
          <input
            className="m-3 c w-50"
            type="text"
            onChange={(event) => {
              setname(event.target.value);
            }}
          />
          <br />
          <label className="display-6 align-baseline">Email</label>
          <input
            type="text"
            className="m-3 c w-50"
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
          <br />
          <label className="display-6 align-baseline">Password</label>
          <input
            className="m-3 c w-50"
            type="text"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          />
          <br />
          <button
            className="my-3 p-3 btn btn-lg btn-primary"
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
