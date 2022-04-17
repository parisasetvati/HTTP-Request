import styles from "./Comment.module.css";
const Comments = ({name,email,onClick}) => {
  return (
    <section className={styles.box}>
      <div className={styles.container} onClick={onClick}>
        <p>name:{name}</p>
        <p>email:{email}</p>
      </div>
    </section>
  );
};

export default Comments;
