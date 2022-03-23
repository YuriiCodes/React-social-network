import classes from "./newPostForm.module.css";
import {useRef} from "react";


function NewPostForm(props){
    const ref = useRef(null);

    let addPost = () => {
        alert(ref.current.value);
    };

    return(
        <form className={classes.form}>
            <label htmlFor="postInput">Add new post:</label>
            <textarea ref={ref} id="postInput" className={classes.input} name="postInput"></textarea>

            <button onClick={addPost} className={classes.submit}>Submit!</button>
        </form>
    )
}

export default NewPostForm;