import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Signup from './Pages/Signup'
import Login from './Pages/Login'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './Store/Context';



function App() {

  // to check user logged in

  const {setUser} =useContext(AuthContext)

  const {firebase} = useContext(FirebaseContext)

useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
})
  return (
    <div>
      <Router>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route path="/Signup">
          <Signup/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
    </Router>
    </div>
  );
}

export default App;
