import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Login = () => {
   const [email, setEmail] =useState('');
   const [password, setPassword]=useState('');

   /*function handleSubmit(event){
      event.preventDefault();
      axios.post('http://localhost:8081/login',{
      email:email, 
      password:password}
      )
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
   }*/
   const login = async (event) => {
      event.preventDefault();
      //console.log(name, email)
      try {
        const resp=await axios.post('http://localhost:8081/login', {
        email: email,
        password: password,
      });
        console.log(resp.data);
        /*if (resp.data.message){
         setLoginStatus(resp.data.message)
        }else{
         setLoginStatus(resp.data[0].username)
        }*/
      } catch (error){
        console.log(error.response)
      }
    };
 
return (
   <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-25 bg-white rounded p-3'>
         <form onSubmit={login}>
            <h2>Iniciar Sesion </h2>
            <div className='mb-3'>
               <label>Email</label>
               <input
                     type="text" placeholder='Enter Email' className='form-control'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
            </div>
            <div className='mb-3'>
               <label>Password</label>
               <input
                     type="password" placeholder='Enter Password' className='form-control' 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
            </div>
            <button className='btn btn-success'>Login</button>
         </form>
      </div>   
   </div>
 )
}

export default Login