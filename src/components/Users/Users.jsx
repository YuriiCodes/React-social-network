import User from "./User/User";
import React, {useEffect} from "react";
import axios from "axios";

// function Users(props) {
//     let getUsers = () => {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
//             props.setUsers(res.data.items)
//             console.log(res);
//         })
//     }
//     let setDefaultUsers = () => {
//         props.setUsers([
//             {
//                 id: 1,
//                 // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
//                 photoUrl: "",
//                 followed: true,
//                 name: "Igor V",
//                 status: "I am Igor!",
//                 location: {city: "Kyiv", country: "Ukraine"}
//             },
//             {
//                 id: 2,
//                 // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
//                 photoUrl: "",
//                 followed: false,
//                 name: "Ayn R",
//                 status: "I have shrugged!",
//                 location: {city: "Washinton", country: "USA"}
//             },
//         ])
//     }
//
//     // Same as applying componentDidMount method in class component
//     useEffect( () => {
//         getUsers();
//     })
//     return (
//         <div>
//             <button onClick={getUsers}>Get users</button>
//             {
//                 props.users.map(u => <User id={u.id} photoUrl={u.photoUrl} followed={u.followed}
//                                            fullName={u.name} status={u.status} follow={props.follow}
//                                            unfollow={props.unfollow} city="Kyiv" country="Ukraine"/>)
//             }
//         </div>
//     )
// };

class Users extends React.Component {
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
            this.props.setUsers(res.data.items)
            console.log(res);
        })
    }
    setDefaultUsers = () => {
        this.props.setUsers([
            {
                id: 1,
                // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
                photoUrl: "",
                followed: true,
                name: "Igor V",
                status: "I am Igor!",
                location: {city: "Kyiv", country: "Ukraine"}
            },
            {
                id: 2,
                // photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
                photoUrl: "",
                followed: false,
                name: "Ayn R",
                status: "I have shrugged!",
                location: {city: "Washinton", country: "USA"}
            },
        ])
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get users</button>
                {
                    this.props.users.map(u => <User id={u.id} photoUrl={u.photoUrl} followed={u.followed}
                                                    fullName={u.name} status={u.status} follow={this.props.follow}
                                                    unfollow={this.props.unfollow} city="Kyiv" country="Ukraine"/>)
                }
            </div>
        )
    }
}

export default Users;