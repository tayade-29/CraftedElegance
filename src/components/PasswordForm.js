import styles from "./PasswordForm.module.css";

const PasswordForm = () => {
  return (
    <div className={styles.property1teaxtareaLgfalse}>
      <div className={styles.formControl}>{` Password `}</div>
      <div className={styles.formControlInputStyle1}>
        <div className={styles.yourMessage}>Your Message</div>
      </div>
      <div className={styles.formText}>
        We'll never share your email with anyone else.
      </div>
    </div>
  );
};

export default PasswordForm;
