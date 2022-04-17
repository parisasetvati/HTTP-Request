import http from "../../Services/httpServices";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";
import { getAllCommentServises } from "../../Services/getAllCommentServises";
import { DeleteComment } from "../../Services/DeleteComment";
import { getOneComment } from "../../Services/getOneComment";

const FullComment = ({ commentId, setComments, setCommentId }) => {
  const [comment, setComment] = useState(null);
  const DeleteHandler = () => {
  DeleteComment(commentId).then((res) => {
     getAllCommentServises().then((res) => {
        setComments(res.data);
        setComment(null);
        setCommentId(null);
      });
    });
  };
  useEffect(() => {
    if (commentId) {
    getOneComment(commentId)
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
