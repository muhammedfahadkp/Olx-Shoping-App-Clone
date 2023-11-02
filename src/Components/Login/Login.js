import React, { useState, useContext} from 'react';
import {useHistory} from 'react-router-dom'
import {FirebaseContext} from '../../Store/Context'
import './Login.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from "@fortawesome/free-solid-svg-icons"


function Login() {

const [email,setEmail] = useState('')
const [password, setPassword] = useState('')

const history =useHistory()

const {firebase} =useContext(FirebaseContext)

const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      alert("Logged in Successfully")
    }).catch((error)=>{
      alert(error.message)
    }).then(()=>{
      history.push("/")
    })
}  

const handleClose= () =>{
  history.push('./')
}

  return (
    <div className='loginPage'>
      <div className="loginParentDiv">
        <FontAwesomeIcon icon={faX} className='closeIcon' onClick={handleClose}/>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            placeholder='Enter Email'
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            placeholder='Enter Password'
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
