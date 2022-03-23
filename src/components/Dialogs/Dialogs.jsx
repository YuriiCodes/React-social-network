import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


let contacts = [
    {
        id: 1,
        name: "🤠 Pevel Durov",
    },
    {
        id: 2,
        name: "🥶 Elon Musk"
    }
];
let dialogsElements = contacts.map(contact => <Dialog id={contact.id} name={contact.name}/>);
let messages = [
    {
        chatId: 1,
        message: ["➡️ Hello"],
    },
    {
        chatId: 2,
        message: ["➡️ How's life, pal?"]
    }
];
let messagesElements = messages.map(message => <Message message={message.message}/>)


function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.contacts}>
                <ul>
                    {dialogsElements};
                </ul>
            </div>
            <div className={classes.chat}>
                <div className={classes.message}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
};


export default Dialogs;