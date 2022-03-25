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
import database from './db.json'
export default function App() {


    const [user, setUser] = useState()
    const [changeLogIn, setChangeLogIn] = useState()
    const [newValue, setNewValue] = useState({name: "", password: ""})
    function changeUser(user){
        setUser(user)
    }

    function signOut(){
      setUser()
    }

    function logInChange(event){
    setNewValue({name: "", password: ""})
      if(changeLogIn === event.target.name){
        setChangeLogIn()
      }else{
        setChangeLogIn(event.target.name)
      }
    }

    function saveNewValues(event){
      setNewValue(oldVal=>{
        return{
          ...oldVal,
          [event.target.name]: event.target.value
        }
      })
    }

    function applyNewValues(event){
      event.preventDefault()

      if(changeLogIn === "username" && newValue.password === user.password){
        database.users.map(item=>{
          if(item.name === user.name && item.password === user.password){
            database.users.splice(item,1)
            database.users.push(newValue)
          } 
          setUser(newValue)
          setNewValue({name: "", password: ""})
        })

      }else if(changeLogIn === "password" && newValue.password === user.password){
        database.users.map(item=>{
          if(item.name === user.name && item.password === user.password){
            item.password = newValue.name
            setUser(item)
            setNewValue({name: "", password: ""})
          }
        })
      }else{
        console.log("WRONG PASSWORD!")
        setNewValue({name: "", password: ""})
      }
    }

    console.log(database)

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Nav user={user}  />}>
              <Route path="" element={<Home user={user}/>} />
            {!user && <Route path="/login" element={<Login  changeUser={changeUser} />} />}
            {!user && <Route path="/register" element={<Register changeUser={changeUser} />} />}
            {user && <Route path="/profile" element={<Profile user={user} signOut={signOut} logInChange={logInChange} changeLogIn={changeLogIn} saveNewValues={saveNewValues} newValue={newValue} applyNewValues={applyNewValues}/>} />}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  /*

  */