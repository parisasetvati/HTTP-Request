import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";

const FullComment = ({ commentId, setComments, setCommentId }) => {
  const [comment, setComment] = useState(null);
  const DeleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((res) => {
        axios.get("http://localhost:3001/comments").then((res) => {
            setComments(res.data);
            setComment(null);
        setCommentId(null);
      })
     
     
        
      });
  };
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  let commentDetail = <p className={styles.massage}> please select comment!</p>;
  if (commentId) commentDetail = <p className={styles.massage}>loading...</p>;
  if (comment) {
    commentDetail = (
      <div className={styles.container}>
        <p>name:{comment.name} </p>
        <p>email:{comment.email}</p>
        <p>body:{comment.body}</p>
        <button onClick={DeleteHandler}>Delete</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
