import {NavLink} from "react-router-dom";
import classes from "./Dialog.module.css";

function Dialog(props) {
    return (
        <li className={classes.dialog}><NavLink to={`/messages/${props.id}`}>{props.name}</NavLink></li>
    )
}

export default Dialog;