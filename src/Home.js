import { useState } from "react";
import database from "./db.json";

export default function Home(props) {



  return (
    <>
      {!props.user && <h1>Sign up or sign in to use this app!</h1>}
      {props.user && (
        <>
          <h1>Add new friends!</h1>
          <div className="card-container">{page}</div>
        </>
      )}
    </>
  );
}
