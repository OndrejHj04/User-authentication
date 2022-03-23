export default function Home(props){



    return(
        <>
        {!props.user && <h1>Sign up or sign in to use this app!</h1>}
        {props.user && <h1>Add new friends!</h1>}
        </>
    )
}