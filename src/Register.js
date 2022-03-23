import { useState } from "react";
import database from './db.json'

export default function Register(props) {

    const [log, setLog] = useState({
        name: "", password: ""
    })

    function change(event){
        setLog(oldVal=>{
            return {
                ...oldVal,
                [event.target.name]: event.target.value
            }
        })
    } 

    function submit(event){
        event.preventDefault()
        database.users.push(log)
        props.changeUser(log)
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
    </>
  );
}