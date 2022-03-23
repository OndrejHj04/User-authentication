import {
    Link,
    Outlet,
  } from "react-router-dom";

export default function Nav(props) {
    return (
      <>
        <Link className="link" to="">Home</Link> 
        {!props.user && <Link className="link" to="/login">Login</Link> }
        {!props.user && <Link className="link" to="/register">Register</Link>}
        {props.user && <Link className="link" to="/profile">Profile</Link>}
        <Outlet />
      </>
    );
  }