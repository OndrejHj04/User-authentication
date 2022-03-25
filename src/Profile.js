export default function Profile(props) {

  return (
    <>
      <h1>Welcome {props.user.name}!!!</h1>
      <button onClick={props.signOut}>Sign out</button>
      <button name="username" onClick={props.logInChange} >Change username</button>
      <button name="password" onClick={props.logInChange} >Change password</button>
      {props.changeLogIn && (
        <form onSubmit={props.applyNewValues}>
          <label>{props.changeLogIn==="username" ? "New name" : "New password" }</label>
          <input value={props.newValue.name} name="name" onChange={props.saveNewValues} type={props.changeLogIn==="username" ? "name" : "password" } />
          <label>{props.changeLogIn==="username" ? "Password" : "Old password" }</label>
          <input value={props.newValue.password} onChange={props.saveNewValues} type="password" name="password"/>
          <button>Submit</button>
        </form>
      )}
      
    </>
  );
}
