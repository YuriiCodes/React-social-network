import classes from "./NewMessageForm.module.css"
import {useRef} from "react";

function NewMessageForm(props){
    let newMessageInputRef = useRef(null);


    let sendMessage = (e) => {
        e.preventDefault();
        props.sendMessage();
    }
    let onMessageChange = () => {
        props.updateNewMessageText(newMessageInputRef.current.value)
    }
    return(
        <form className={classes.form} onSubmit={sendMessage}>
            <input ref={newMessageInputRef} type="text" onChange={onMessageChange} value={props.newMessageText} className={classes.input}/>
            <button  onClick={sendMessage} className={classes.submit}>
               Send
            </button>
        </form>
    )
}
export default NewMessageForm;