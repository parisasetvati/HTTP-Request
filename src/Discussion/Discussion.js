import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "../Components/Comments/Comments";
import FullComment from "../Components/FullComment/FullComment";
import NewComment from "../Components/NewComment/NewComment";
import styles from "./Discussion.module.css";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const[commentId,setCommentId]=useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/comments")
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);
  const clickHandler=(id)=>{
setCommentId(id);
  }
  return (
    <section className={styles.container}>
      <h2>Http Request</h2>
      <div>
      {comments ?
comments.map((c)=>{
return <Comments  key={c.id} name={c.name} email={c.email} onClick={()=>clickHandler(c.id)}/>
}): <p>loading.....</p>}
      </div>

      
      <FullComment commentId={commentId} setComments={setComments} setCommentId={setCommentId}/>
      <NewComment setComments={setComments} />
    </section>
  );
};

export default Discussion;
