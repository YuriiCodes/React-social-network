import classes from "./Dialogs.module.css";


function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.contacts}>
                <ul>
                    {props.dialogsElements};
                </ul>
            </div>
            <div className={classes.chat}>
                <div className={classes.message}>
                    {props.messagesElements}
                </div>
            </div>
        </div>
    )
};


export default Dialogs;