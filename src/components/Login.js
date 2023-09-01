import React, { useState } from 'react';
import  Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css'
import {IoMdLogIn} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate=useNavigate()
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
    const [num,setNum]=useState(0)
    
    const submit=async(userobject)=>{
     userobject.preventDefault(); 

     var userobj=
     {
       username:email,
       password:password
     }
       await axios.post('http://localhost:3000/users/login',userobj)
       .then((response)=>{
         if(response.data.state===200){
           console.log("No user exists");
           setNum(1)
         }
         else{
          if(response.data.message==="Invalid username/password"){
           console.log("Invalid username/password");
           setNum(2);
          }
           else if(response.data.state===100)
           {
            // console.log(response)
            navigate('/Matchingpairs');
           console.log("login success");
           }
           else{
            console.log(response)
           }
         }
       })
      .catch(err=>alert(`${err.message}`));

     
    }

  return (
    <div className='login w-50 mx-auto ' >
      <form onSubmit={submit}>
        <h1>Login</h1>
        <input type='email' placeholder='*Enter email' onChange={(e)=>setEmail(e.target.value)} /> 
        {
          num===1&&<h6 style={{color:'red'}}>*User doesn't exists</h6>
        }
        <input type='password' placeholder='*Enter password' onChange={(e)=>setPassword(e.target.value)}/>
        {
          num===2&&<h6 style={{color:'red'}}>*password doesn't exists</h6>
        }
        <Button variant='primary' type='submit'>Login <IoMdLogIn/></Button>
      </form>
    </div>
  )
}

export default Login;
