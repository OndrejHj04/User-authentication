import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Nav from "./Nav";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";
import Profile from './Profile'
import Home from './Home'
export default function App() {


    const [user, setUser] = useState()


    function changeUser(user){
        setUser(user)
    }

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Nav user={user}/>}>
              <Route path="" element={<Home user={user}/>} />
            {!user && <Route path="/login" element={<Login  changeUser={changeUser} />} />}
            {!user && <Route path="/register" element={<Register changeUser={changeUser} />} />}
            {user && <Route path="/profile" element={<Profile user={user} />} />}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  /*

  */