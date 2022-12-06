import React ,{useEffect,useContext}from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from './Pages/Login'
import Create from "./Pages/Create";
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from "./Store/Context";
import Post from "./Store/postContext";

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      
      setUser(user)
    })
  })

  return (
    <div>
    <Post>
      <Router>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/view">
          <View />
        </Route>
      </Router>
    </Post>
    </div>
  );
}

export default App;
