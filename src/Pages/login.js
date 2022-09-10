import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import OAuth from "../components/Oauth";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/home");
      }
    } catch (error) {
      toast.error("Bad User Credentials");
    }
  };

  return (
    <div className=" bg-background w-full h-screen">
      <h1 className="text-5xl font-bold">Easy Fund</h1>
      <h2 className="text-4xl font-medium">Help saving you money</h2>

      <OAuth />
    </div>
  );
}

export default Login;
