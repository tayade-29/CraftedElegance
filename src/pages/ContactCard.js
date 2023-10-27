import ListEntryContainer from "../components/ListEntryContainer";
import styles from "./ContactCard.module.css";

const ContactCard = () => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.div}>
        <b className={styles.h5}>Contact Us</b>
        <b className={styles.h2}>Make an Appointment</b>
      </div>
      <ListEntryContainer />
      <div className={styles.buttonbtnprimaryColor}>
        <b className={styles.btnText}>Connect With Us</b>
      </div>
    </div>
  );
};

export default ContactCard;
