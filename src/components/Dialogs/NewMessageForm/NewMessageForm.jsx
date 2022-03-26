import classes from "./NewMessageForm.module.css"
import {messageChangeActionCreator, sendMessageActionCreator} from "../../../data/dialogsReducer";


function NewMessageForm(props) {

    let sendMessage = (e) => {
        e.preventDefault();
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e) => {
        props.dispatch(messageChangeActionCreator(e.target.value));

    }
    return (
        <form className={classes.form} onSubmit={sendMessage}>
            <input  type="text" onChange={onMessageChange} value={props.newMessageText}
                   className={classes.input}/>
            <button onClick={sendMessage} className={classes.submit}>
                Send
            </button>
        </form>
    )
}

export default NewMessageForm;