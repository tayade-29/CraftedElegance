import styles from "./ListEntryContainer.module.css";

const ListEntryContainer = () => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.div}>
        <div className={styles.customSelect}>
          <div className={styles.inputformControl}>
            <div className={styles.email}>{`Full Name * `}</div>
          </div>
        </div>
        <div className={styles.customSelect}>
          <div className={styles.inputformControl}>
            <div className={styles.email}>{`Email * `}</div>
          </div>
        </div>
      </div>
      <div className={styles.customSelectParent}>
        <div className={styles.customSelect}>
          <div className={styles.select}>
            <div className={styles.option}>
              <div className={styles.dropdown}>Please Select</div>
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
        <div className={styles.customSelect}>
          <div className={styles.select}>
            <div className={styles.option6}>
              <b className={styles.dropdown1}>4:00 Available</b>
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
      </div>
      <div className={styles.formControlTextareaInputSt}>
        <b className={styles.message}>Message</b>
      </div>
    </div>
  );
};

export default ListEntryContainer;
