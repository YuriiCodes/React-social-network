import classes from "./NewMessageForm.module.css"
import {useRef} from "react";

function NewMessageForm(props){
    let newMessageInputRef = useRef(null);
    let sendMessage = () => {
        alert(newMessageInputRef.current.value);
    }
    return(
        <form className={classes.form}>
            <input ref={newMessageInputRef} type="text" className={classes.input}></input>
            <button  onClick={sendMessage} className={classes.submit}>
               Send
            </button>
        </form>
    )
}
export default NewMessageForm;