import TexttrueIconfalseRounded from "./TexttrueIconfalseRounded";
import styles from "./MainContentContainer.module.css";

const MainContentContainer = () => {
  return (
    <div className={styles.mainContent}>
      <b className={styles.h2FeatureSection1}>
        <p className={styles.getAnswersTo}>{`Get answers to all your `}</p>
        <p className={styles.getAnswersTo}>questions.</p>
      </b>
      <div
        className={styles.paragraph}
      >{`Problems trying to resolve the conflict between the two major realms of Classical physics: `}</div>
      <TexttrueIconfalseRounded
        buttonText="CONTACT OUR COMPANY"
        texttrueIconfalseRoundedBackgroundColor="#23856d"
      />
      <div className={styles.sm}>
        <img
          className={styles.logostwitterIcon}
          alt=""
          src="/logostwitter.svg"
        />
        <img
          className={styles.logosfacebookIcon}
          alt=""
          src="/logosfacebook.svg"
        />
        <img
          className={styles.logosfacebookIcon}
          alt=""
          src="/antdesigninstagramoutlined.svg"
        />
        <img
          className={styles.logoslinkedinIcon}
          alt=""
          src="/logoslinkedinicon.svg"
        />
      </div>
    </div>
  );
};

export default MainContentContainer;
