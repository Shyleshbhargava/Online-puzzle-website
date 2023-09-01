import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import {useState} from 'react';
import {IoMdLogIn} from 'react-icons/io'
import { useNavigate } from 'react-router';

function Signup() {
    let navigate=useNavigate()
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)
    const [name,setName]=useState(null);

    const [flag,setFlag]=useState(0)

    const submit=async(e)=>{
      var userobject=
      {
        name:name,
        username:email,
        password:password
      }
       e.preventDefault();
       if(userobject.email===null || userobject.password===null||userobject.name==null)setFlag(1);
        else{
        await axios.post('http://localhost:3000/users/createuser',userobject)
        .then((response)=>{
          if(response.data.message==="User created Succesfully"){
            console.log("User created Succesfully");
            navigate('/Login');
          }
          else{
            console.log(response)
            console.log("Username already exists");
            setFlag(2);
          }
        })
       .catch(err=>alert(`${err.message}`));
      }
    }
    
  return (
    <div className='login w-50 mx-auto'>
      <form>
        <h1>Signup</h1>
        <input  type='text' placeholder='*Enter name' onChange={(e)=>setName(e.target.value)}/>
        <input type='email' placeholder='*Enter email' onChange={(e)=>setEmail(e.target.value)} />
        {
          flag===2&&<h6 style={{color:'red'}}>*Username already exists</h6>
        }
        <input type='password' placeholder='*Enter password' onChange={(e)=>setPassword(e.target.value)}/>
        {
          flag===1&&<h6 style={{color:'red'}}>*Each field must be filled</h6>
        }
        <Button variant='primary' type='submit' onClick={submit}>Signup  <IoMdLogIn/></Button>
      </form> 
    </div>
  )
}

export default Signup;
