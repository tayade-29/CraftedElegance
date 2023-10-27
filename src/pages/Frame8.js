import styles from "./Frame8.module.css";

const Frame8 = () => {
  return (
    <div className={styles.vectorParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-8.svg" />
      <img className={styles.frameItem} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.frameInner} alt="" src="/ellipse-5@2x.png" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-6@2x.png" />
      <img className={styles.frameChild1} alt="" src="/ellipse-7@2x.png" />
      <img className={styles.frameChild2} alt="" src="/ellipse-3@2x.png" />
      <img className={styles.frameChild3} alt="" src="/ellipse-4@2x.png" />
      <div className={styles.home}>Home</div>
      <div className={styles.dahboard}>Dahboard</div>
      <div className={styles.profile}>Profile</div>
      <div className={styles.productListing}>product Listing</div>
      <div className={styles.wallet}>Wallet</div>
      <div className={styles.wantToBuy}>Want to Buy</div>
    </div>
  );
};

export default Frame8;
