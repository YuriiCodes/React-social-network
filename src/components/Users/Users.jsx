import User from "./User/User";
import React, {useEffect} from "react";
import axios from "axios";
import classes from "./Users.module.css"
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
//     // Hook that is called after every render cycle (both render and every re-render)
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
        let url = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        axios.get(url).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
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
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        let url = `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`;
        axios.get(url).then(res => {
            this.props.setUsers(res.data.items)
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i<= pagesCount; ++i){
            pages.push(i)
        }

        return (
            <div>
                <button className={classes.userLoaderBtn} onClick={this.setDefaultUsers}>Get users</button>
                <div className={classes.pagination}>
                    {pages.map(p =><span onClick={ (e) => this.onPageChanged(p)} className={p === this.props.currentPage? classes.active: ""}>{p}</span>)}

                </div>
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