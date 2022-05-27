import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { get } from "mongoose";

const Login = () => {
  const [signName, setsignName] = useState("");
  const [signEmail, setsignEmail] = useState("");
  const [signPwd, setsignPwd] = useState("");
  const [loginMail, setloginMail] = useState("");
  const [loginPwd, setloginPwd] = useState("");
  const [allUsers, setallUsers] = useState([]);
  let navigate = useNavigate();

  const signup = () => {
    var user = {
      userName: signName,
      email: signEmail,
      password: signPwd,
    };
    axios
      .post("http://localhost:5000/api/user/add", user)
      .then(() => {
        console.log("user added successfully");
      })
      .catch((err) => console.log(err));
  };

  const signin = () => {
    axios
      .get("http://localhost:5000/api/user/findAll")
      .then((res) => {
        console.log(res.data);
        setallUsers(res.data);
      })
      .then(() => {
        allUsers.map((ele) => {
          if (loginMail === ele.email && loginPwd === ele.password) {
            navigate("/home", { replace: true });
          }
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input
          onChange={(e) => {
            setsignName(e.target.value);
          }}
          type="text"
          name="txt"
          placeholder="User name"
          required=""
        />
        <input
          onChange={(e) => {
            setsignEmail(e.target.value);
          }}
          type="email"
          name="email"
          placeholder="Email"
          required=""
        />
        <input
          onChange={(e) => {
            setsignPwd(e.target.value);
          }}
          type="password"
          name="pswd"
          placeholder="Password"
          required=""
        />
        <button onClick={signup}>Sign up</button>
      </div>

      <div className="login">
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input
          onChange={(e) => {
            setloginMail(e.target.value);
          }}
          type="email"
          name="email"
          placeholder="Email"
          required=""
        />
        <input
          onChange={(e) => {
            setloginPwd(e.target.value);
          }}
          type="password"
          name="pswd"
          placeholder="Password"
          required=""
        />
        <button onClick={signin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
//rafece
