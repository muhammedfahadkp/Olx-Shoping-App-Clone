import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {useHistory} from 'react-router-dom'
import { FirebaseContext } from '../../Store/FirebaseContext';

export default function Signup() {

  const history = useHistory()

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const {firebase} = useContext(FirebaseContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
      result.user.updateProfile({displayName:userName}).then(()=>{
        firebase.firestore().collection('User-details').add({
          id:result.user.uid,
          username: userName,
          mobile: mobile
        }).then(()=>{
          history.push('/Login')
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv" >
        <img width="250px" height="250px"src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            id="fname"
            name="name"
            placeholder='Enter Your Name'
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            placeholder='Enter Your Email'
          />
          <br />
          <label htmlFor="lname">Mobile Number</label>
          <br />
          <input
            className="input"
            type="number"
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            id="lname"
            name="phone"
            placeholder='Enter Your Mobile Number'
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            placeholder='Enter Your Password'
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
