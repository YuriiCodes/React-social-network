import classes from "./newPostForm.module.css";
import {useRef} from "react";


function NewPostForm(props) {
    const newPostInput = useRef(null);

    let addPost = (e) => {
        e.preventDefault();
        props.dispatch({type: "ADD-POST"})
    };
    let onPostChange = () => {
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: newPostInput.current.value})
    };
    return (
        <form className={classes.form} onSubmit={addPost}>
            <label for="postInput">Add new post</label>
            <input id="postInput" ref={newPostInput} type="text" onChange={onPostChange} className={classes.input}
                   name="postInput" value={props.newPostText}/>
            <button onClick={addPost} className={classes.submit}>
                Send
            </button>
        </form>
    )
}

export default NewPostForm;