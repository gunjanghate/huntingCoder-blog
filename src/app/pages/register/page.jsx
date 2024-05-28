import React from "react";
import { register } from "../../../lib/action";

const Register = () => {
  return (
    <main
      id="header"
      className="main-blog-page flex min-h-screen flex-col items-center  p-0 h-screen overflow-scroll"
    >
      <h1>Register</h1>
      <form action={register} id="registrationForm" className="flex flex-col gap-8 text-black">
        <input type="text" placeholder="username" name="name" id="" />
        <input type="email" placeholder="email" name="email" id="" />
        <input type="password" placeholder="paass" name="pass" id="" />
        <input type="password" placeholder="paaassagain" name="passagain" id="" />
        <button>Register</button>
      </form>
    </main>
  );
};

export default Register;
