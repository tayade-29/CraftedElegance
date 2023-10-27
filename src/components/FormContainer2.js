import PhoneNoForm2 from "./PhoneNoForm2";
import JoinUsForm1 from "./JoinUsForm1";
import PasswordForm from "./PasswordForm";
import styles from "./FormContainer2.module.css";

const FormContainer2 = () => {
  return (
    <div className={styles.formGroup}>
      <PhoneNoForm2 />
      <JoinUsForm1 />
      <PasswordForm />
    </div>
  );
};

export default FormContainer2;
