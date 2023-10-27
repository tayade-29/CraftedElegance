import styles from "./FilteredCardForm.module.css";

const FilteredCardForm = () => {
  return (
    <div className={styles.property1selectLgfalse}>
      <div className={styles.formControl}>
        <span>Categories</span>
        <span className={styles.span}> *</span>
      </div>
      <div className={styles.customSelect}>
        <div className={styles.select}>
          <div className={styles.option}>
            <div className={styles.dropdown}>Select</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.option1}>
            <div className={styles.listEntry}>List Entry # 1</div>
          </div>
          <div className={styles.option2}>
            <div className={styles.listEntry}>List Entry # 2</div>
          </div>
          <div className={styles.option3}>
            <div className={styles.listEntry}>List Entry # 3</div>
          </div>
          <div className={styles.option4}>
            <div className={styles.listEntry}>List Entry # 4</div>
          </div>
          <div className={styles.option5}>
            <div className={styles.listEntry}>List Entry # 5</div>
          </div>
        </div>
      </div>
      <div className={styles.formText}>Choose from the list.</div>
    </div>
  );
};

export default FilteredCardForm;
