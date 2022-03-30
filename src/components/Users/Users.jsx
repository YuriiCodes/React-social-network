import User from "./User/User";

function Users(props) {
    if (props.users.length === 0 ){
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4E_d2WpFzHjpmcjH_Fi4epAj6z4ul2c0BJQ&usqp=CAU",
                followed: true,
                fullName: "Igor V",
                status: "I am Igor!",
                location: {city: "Kyiv", country: "Ukraine"}
            },
        ])
    }

    return (
        <div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt=""/>
                        </div>
                    </span>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>follow</button>}

                    </div>
                    <span>
                        <span>
                            <div>{u.fullName}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};


export default Users;