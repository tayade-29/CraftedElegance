import TexttrueIconfalseRounded1 from "./TexttrueIconfalseRounded1";
import styles from "./PropertyForm.module.css";

const PropertyForm = () => {
  return (
    <div className={styles.property1teaxtareaLgtrue}>
      <div className={styles.formControl}>Discription</div>
      <div className={styles.formControlInputStyle1}>
        <div className={styles.yourMessage}>Your Message</div>
      </div>
      <div className={styles.formText}>
        Write the complete discription of your product
      </div>
      <TexttrueIconfalseRounded1
        h3="Sell Product"
        texttrueIconfalseRoundedBackgroundColor="#23856d"
        texttrueIconfalseRoundedPosition="absolute"
        texttrueIconfalseRoundedTop="252px"
        texttrueIconfalseRoundedLeft="403px"
        h3FontFamily="Vollkorn"
        h3Color="rgba(0, 0, 0, 0.5)"
      />
    </div>
  );
};

export default PropertyForm;
