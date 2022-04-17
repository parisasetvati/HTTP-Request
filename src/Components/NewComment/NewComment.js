import http from "../../Services/httpServices";
import { useState } from "react";
import styles from "./NewComment.module.css";
import { getAllCommentServises } from "../../Services/getAllCommentServises";
import { addNewComment } from "../../Services/addNewComent";
const NewComment = ({ setComments }) => {
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeHandler = (e) => {
    console.log(e.target.name, e.target.value);
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };
  const addCommentHandler = () => {
    addNewComment({...newComment,postId:10})
      .then((res) => {
        getAllCommentServises()
          .then((res) => setComments(res.data));
      })
      .catch();
  };
  return (
    <section className={styles.container}>
      <div>
        <label>name</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div>
        <label>email</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div>
        <label>body</label>
        <textarea type="textarea" onChange={changeHandler} name="body" />
      </div>
      <button onClick={addCommentHandler}>Add New Comment</button>
    </section>
  );
};

export default NewComment;
