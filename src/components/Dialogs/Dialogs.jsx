import classes from "./Dialogs.module.css";
import {BrowserRouter, NavLink} from "react-router-dom";

function Dialogs(props){
    // let { path, url } = useRouteMatch();
    return(
        <BrowserRouter>
           <div className={classes.dialogs}>
               <div className={classes.contacts}>
                   <ul>
                       <li><NavLink to="/messages/1">🤠 Pevel Durov</NavLink></li>
                       <li><NavLink to="/messages/2">🥶 Elon Musk</NavLink></li>
                   </ul>
               </div>
               <div className={classes.chat}>
                    <div className={classes.message}>
                        <p>➡️ Hello</p>
                        <p>➡️ How's life, pal?</p>
                    </div>
               </div>
           </div>
        </BrowserRouter>
    )
}

export default Dialogs;