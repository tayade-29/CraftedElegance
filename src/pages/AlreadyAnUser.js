import styles from "./AlreadyAnUser.module.css";

const AlreadyAnUser = () => {
  return (
    <div className={styles.alreadyAnUserContainer}>
      <span>
        <span className={styles.already}>{`Already `}</span>
        <span className={styles.anUser}>an user</span>
        <span className={styles.span}>{` `}</span>
      </span>
      <span className={styles.span}>
        <span className={styles.login1}>Login</span>
      </span>
    </div>
  );
};

export default AlreadyAnUser;
