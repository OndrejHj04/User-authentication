import { useState } from "react";
import database from './db.json'

export default function Login(props) {
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
        database.users.map(item=>{
            if(item.name === log.name && item.password === log.password){
                props.changeUser(log)
            }
        })
        setLog({name: "", password: ""})
        setWrongValue(true)
    }

  return (
    <>
    <h1>Login</h1>
     <form onSubmit={submit}>
         <input type="text" placeholder="name" name="name" onChange={change} value={log.name}/>
         <input type="password" placeholder="password" name="password" onChange={change} value={log.password}/>
         <button>Login</button>
     </form>
     {wrongValue && <h2>Wrong username or password</h2>}
    </>
  );
}
