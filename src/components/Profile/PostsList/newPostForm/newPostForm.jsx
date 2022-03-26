import classes from "./newPostForm.module.css";
import {useRef} from "react";


function NewPostForm(props){
    const newPostInput = useRef(null);

    let addPost = (e) => {
        e.preventDefault();
        // props.addPost();
        props.dispatch({type:"ADD-POST"})
    };
    let onPostChange = () => {
        // props.updateNewPostText(newPostInput.current.value);
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newPostText: newPostInput.current.value})

    }
    return(
        // <div className={classes.form}>
        //     <label htmlFor="postInput">Add new post:</label>
        //     <textarea ref={ref} id="postInput" className={classes.input} onChange={onPostChange} name="postInput" value={props.newPostText} />
        //
        //     <button onClick={addPost}  className={classes.submit}>Submit!</button>
        // </div>
    <form className={classes.form} onSubmit={addPost}>
        <label for="postInput">Add new post</label>
        <input id="postInput" ref={newPostInput} type="text" onChange={onPostChange} className={classes.input} name="postInput" value={props.newPostText} />
        <button  onClick={addPost} className={classes.submit}>
            Send
        </button>
    </form>
    )
}

export default NewPostForm;