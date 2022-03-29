import classes from "./Users.module.css";
import User from "./User/User";

let users = [{
    id: 1,
    photoUrl: "",
    following: true,
    fullName: "Dmitry k",
    location: {city: "Minsk", country: "Belarus"},
    status: "I am react teacher."
}, {
    id: 2,
    photoUrl: "",
    following: true,
    fullName: "Max M",
    location: {city: "London", country: "UK"},
    status: "I am in London lol"
}, {
    id: 3,
    photoUrl: "",
    following: false,
    fullName: "Arthur S",
    location: {city: "Amsterdam", country: "Holland"},
    status: "I love ML"
}]

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers(users)
    }
    window.users = props.users;
    let users = props.users.map(user => {
        return (<User fullName={user.fullName} status={user.status} following={user.following}
                      city={user.location.city} country={user.location.country}
                      photoUrl={user.photoUrl}
        />)
    })
    return (
        <div className={classes.users}>
            <h1>Hello users!</h1>
            <User fullName={props.users[0].fullName} status={props.users[0].status} following={props.users[0].following}
                  city={props.users[0].location.city} country={props.users[0].location.country}
                  photoUrl={props.users[0].photoUrl}
            />
            {users}

        </div>
    )
}

export default Users;