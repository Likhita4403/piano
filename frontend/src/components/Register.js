import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";

function Register() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [confirm_Password, setconfirm_Password] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const writeUsers = () => {
    Axios.post("http://localhost:3001/writeUsers", {
      name,
      email,
      password
      // confirm_Password,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          email,
          password
          // confirm_Password,
        },
      ]);
    });
  };

  return (
    <div className='container mx-5 text-center border border-primary rounded '>
      {/* <div className="UsersDisplay">
        {listOfUsers.map((user) => {
          return (
            // <div>
            //   <h1>name: {user.name}</h1>
            //   <h1>email: {user.email}</h1>
            //   <h1>password: {user.password}</h1>
            //   {/* <h1>Confirm password: {user.confirm_Password}</h1>
            // </div>
          );
        }
        )};
     </div> */}
      <div className='p-5'>
      <label className='lead m-3'>Name</label>
        <input className='m-3'
          type="text"
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
        <br/>
        <label className='lead m-3'>Email</label>
        <input 
          type="text" className=''
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <br/>
        <label className='lead m-3'>Password</label>
        <input  className='m-3'
          type="text"
          onChange={(event) => {
            setpassword(event.target.value);
          }}
        />
        {/* <input
          type="text"
          placeholder="Confirm password..."
          onChange={(event) => {
            setconfirm_Password(event.target.value);
          }}
        />
        {password===confirm_Password} */}
        <br/>
        <button className='my-3 p-3 btn btn-lg btn-primary' onClick={writeUsers}> Create User </button>
      </div>
    </div>
);}

export default Register