import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";

export const RegisterForm = () => {
  const dispatch = useDispatch();
//   const[name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleChange = ({ target: { name, value }}) => {

//     switch(name) {
//         case 'name': 
//         setName(value);
//         break;

//         case 'email': 
//         setEmail(value);
//         break;

//         case 'password': 
//         setPassword(value);
//         break;

//         default: 
//             return;
//     }
//   };

const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name"  />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password"  />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
