import database from './db.json'

export default function Profile(props){
    return (
        <>
            <h1>Welcome {props.user.name}!!!</h1>
        </>
    )
}