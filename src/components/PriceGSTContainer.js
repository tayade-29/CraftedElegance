import styles from "./PriceGSTContainer.module.css";

const PriceGSTContainer = () => {
  return (
    <div className={styles.property1defaultLgfalse}>
      <div className={styles.formControl}>Price + GST</div>
      <div className={styles.formControlInputStyle1}>
        <div className={styles.inputformControl} />
      </div>
      <div className={styles.formText}>
        Put the definite price you want to sell your product
      </div>
    </div>
  );
};

export default PriceGSTContainer;
