import styles from "./FormContainer1.module.css";

const FormContainer1 = () => {
  return (
    <div className={styles.tabThree}>
      <b className={styles.h3}>Reviews :</b>
      <div className={styles.thereAreNo}>There are no reviews yet.</div>
      <div className={styles.form}>
        <b className={styles.h31}>Be the first to review “Product Name”</b>
        <div className={styles.rating}>
          <div className={styles.formControl}>Your Rating</div>
          <div className={styles.stars}>
            <img
              className={styles.icnBxsStarIcon}
              alt=""
              src="/icn-bxsstar.svg"
            />
            <img
              className={styles.icnBxsStarIcon}
              alt=""
              src="/icn-bxsstar1.svg"
            />
            <img
              className={styles.icnBxsStarIcon}
              alt=""
              src="/icn-bxsstar2.svg"
            />
            <img
              className={styles.icnBxsStarIcon}
              alt=""
              src="/icn-bxsstar3.svg"
            />
            <img
              className={styles.icnBxsStarIcon}
              alt=""
              src="/icn-bxstar.svg"
            />
          </div>
        </div>
        <div className={styles.textarea}>
          <div className={styles.formControl}>Your Review *</div>
          <div className={styles.formControlTextareaInputSt}>
            <div className={styles.message}>Message</div>
          </div>
        </div>
        <div className={styles.inputs}>
          <div className={styles.rating}>
            <div className={styles.formControl2}>
              <b>Name</b>
              <b className={styles.b}> *</b>
            </div>
            <div className={styles.formControlInputStyle1}>
              <div className={styles.inputformControl}>
                <div className={styles.email}>{`name * `}</div>
              </div>
            </div>
          </div>
          <div className={styles.formGroup1}>
            <div className={styles.formControl3}>
              <b>Email</b>
              <b className={styles.b}> *</b>
            </div>
            <div className={styles.formControlInputStyle11}>
              <div className={styles.inputformControl}>
                <div className={styles.email}>{`Email * `}</div>
              </div>
            </div>
            <div className={styles.formText}>
              We'll never share your email with anyone else.
            </div>
          </div>
        </div>
        <div className={styles.customCheckbox}>
          <div className={styles.formCheckInput} />
          <div className={styles.formCheckLabel}>
            Save my name, email, and website in this browser for the next time I
            comment.
          </div>
        </div>
        <div className={styles.btn1}>
          <b className={styles.btnText}>Submit</b>
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
