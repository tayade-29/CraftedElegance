import styles from "./Property1DefaultLgtrue.module.css";

const Property1DefaultLgtrue = () => {
  return (
    <div className={styles.property1defaultLgtrue}>
      <div className={styles.formControl}>Email address *</div>
      <div className={styles.formControlInputStyle1}>
        <div className={styles.inputformControl}>
          <div className={styles.email}>{`Email * `}</div>
        </div>
      </div>
      <div className={styles.formText}>
        We'll never share your email with anyone else.
      </div>
    </div>
  );
};

export default Property1DefaultLgtrue;
