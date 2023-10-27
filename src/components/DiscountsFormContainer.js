import styles from "./DiscountsFormContainer.module.css";

const DiscountsFormContainer = () => {
  return (
    <div className={styles.property1defaultLgfalse}>
      <div className={styles.formControl}>
        <span>Discounts</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.formControlInputStyle1}>
        <div className={styles.inputformControl} />
      </div>
      <div className={styles.formText}>Discounts if you want to give</div>
    </div>
  );
};

export default DiscountsFormContainer;
