import classes from "./newPostForm.module.css";
import {useRef} from "react";
import {addPostActionCreator, postChangeActionCreator} from "../../../../data/state";


function NewPostForm(props) {
    const newPostInput = useRef(null);

    let addPost = (e) => {
        e.preventDefault();
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        props.dispatch(postChangeActionCreator(newPostInput.current.value));
    };
    return (
        <form className={classes.form} onSubmit={addPost}>
            <label htmlFor="postInput">Add new post</label>
            <input id="postInput" ref={newPostInput} type="text" onChange={onPostChange} className={classes.input}
                   name="postInput" value={props.newPostText}/>
            <button onClick={addPost} className={classes.submit}>
                Send
            </button>
        </form>
    )
}

export default NewPostForm;