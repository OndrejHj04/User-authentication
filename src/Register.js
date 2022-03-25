import { useState } from "react";
import database from './db.json'

export default function Register(props) {

    const [log, setLog] = useState({
        name: "", password: ""
    })
    const [wrongValue, setWrongValue] = useState()
    function change(event){
        setWrongValue()
        setLog(oldVal=>{
            return {
                ...oldVal,
                [event.target.name]: event.target.value
            }
        })
    } 

    function submit(event){
        event.preventDefault()

        if(log.name.length > 3 && log.password.length > 3 && database.users.every(item=>item.name !== log.name)){
            database.users.push(log)
            props.changeUser(log)
        }else{
            setWrongValue(true)
        }
        setLog({name: "", password: ""})
    }

  return (
    <>
    <h1>Register</h1>
     <form onSubmit={submit}>
         <input type="text" placeholder="name" name="name" onChange={change} value={log.name}/>
         <input type="password" placeholder="password" name="password" onChange={change} value={log.password}/>
         <button>Login</button>
     </form>
     {wrongValue && <h2>Username must be unique and longer than 3 letters</h2>}
    </>
  );
}