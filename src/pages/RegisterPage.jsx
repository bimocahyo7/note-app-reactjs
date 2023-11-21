import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network";
import { Label, TextInput } from "flowbite-react";
import { ButtonDefault, ButtonDisabled } from "../components/Button";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    register({ username, password }).then((response) => {
      console.log(response);
      if (!response.error) {
        alert("Berhasil! Silahkan login");
        console.log(`Berhasil membuat akun baru! username: ${username}, password: ${password} `);
        // Jika berhasil register akun, navigasi ke halaman login
        navigate("/login");
      } else {
        alert("Gagal membuat akun!");
      }
    });
  }

  const onLoginHandler = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div className="container min-h-screen flex justify-center bg-amber-100">
      <form
        onSubmit={(event) => {
          console.log("Berhasil disubmit!");
          onSubmitHandler(event);
        }}
        className="bg-violet-300 shadow-lg rounded-lg flex w-full max-w-md h-fit px-8 py-6 flex-col gap-4 mt-14">
        <div>
          <h1 className="text-2xl font-bold text-center text-slate-700 mb-7">Register User</h1>
          <div className="mb-2 block">
            <Label className="text-base text-slate-700">Username:</Label>
          </div>
          <TextInput
            onChange={(event) => {
              console.log(event.target.value);
              const value = event.target.value;
              setUsername(value);
            }}
            type="text"
            placeholder="example: bimocahyo"
            required
            shadow
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label className="text-base text-slate-700">Password:</Label>
          </div>
          <TextInput
            onChange={(event) => {
              console.log(event.target.value);
              const value = event.target.value;
              setPassword(value);
            }}
            type="password"
            required
            shadow
          />
        </div>

        {/* Submit Button */}
        {username && password ? <ButtonDefault>Submit</ButtonDefault> : <ButtonDisabled>Submit</ButtonDisabled>}

        {/* Navigate Login */}
        <div>
          <text className="text-sm">Punya akun?</text>
          <button onClick={onLoginHandler} className="text-sm pl-1">
            <u>Login</u>
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
