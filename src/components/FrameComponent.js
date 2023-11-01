import SizeSStatePrimaryIconNo from "./SizeSStatePrimaryIconNo";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.headerParent}>
      <header className={styles.header} id="H1">
        <div className={styles.craftedElegance}>Crafted Elegance</div>
      </header>
      <div className={styles.body} id="Main">
        <img className={styles.p51Icon} alt="" src="/p5-1@2x.png" />
        <img className={styles.p52Icon} alt="" src="/p5-2@2x.png" />
        <img className={styles.p91Icon} alt="" src="/p9-1@2x.png" />
        <img className={styles.p64Icon} alt="" src="/p6-4@2x.png" />
      </div>
      <div className={styles.buttons}>
        <SizeSStatePrimaryIconNo
          showChatWitHUs={false}
          sizeSStatePrimaryIconNoBackgroundColor="#23856d"
          sizeSStatePrimaryIconNoPosition="absolute"
          sizeSStatePrimaryIconNoTop="11.7px"
          sizeSStatePrimaryIconNoLeft="74.7px"
          sizeSStatePrimaryIconNoWidth="274.9px"
          sizeSStatePrimaryIconNoHeight="78px"
          chatWitHUsColor="#fff"
        />
        <div className={styles.buyer}>buyer</div>
        <SizeSStatePrimaryIconNo
          showChatWitHUs={false}
          sizeSStatePrimaryIconNoBackgroundColor="#23856d"
          sizeSStatePrimaryIconNoPosition="absolute"
          sizeSStatePrimaryIconNoTop="11.7px"
          sizeSStatePrimaryIconNoLeft="549.8px"
          sizeSStatePrimaryIconNoWidth="274.9px"
          sizeSStatePrimaryIconNoHeight="78px"
          chatWitHUsColor="rgba(188, 163, 127, 0.01)"
        />
        <div className={styles.seller}>SELLER</div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.features}>
          <div className={styles.preview01}>
            <img
              className={styles.fullScreenBlackSmartphoneMIcon}
              alt=""
              src="/full-screen-black-smartphone-mockup-design-5-1@2x.png"
            />
          </div>
          <div className={styles.featuresChild} />
          <div className={styles.featuresItem} />
          <div className={styles.featuresInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.featuresChild1} />
          <div className={styles.featuresChild2} />
          <img className={styles.prisonIcon} alt="" src="/prison.svg" />
          <img
            className={styles.colorDropperIcon}
            alt=""
            src="/color-dropper.svg"
          />
          <img className={styles.textColorIcon} alt="" src="/text-color.svg" />
          <img className={styles.designIcon} alt="" src="/design.svg" />
          <img
            className={styles.fourSquaresIcon}
            alt=""
            src="/four-squares.svg"
          />
          <div className={styles.createAccount}>CREATE ACCOUNT</div>
          <div className={styles.getProductReviews}>GET PRODUCT REVIEWS</div>
          <div className={styles.whishlistYourProduct}>
            WHISHLIST YOUR PRODUCT
          </div>
          <div className={styles.enjoyDiscounts}>ENJOY DISCOUNTs</div>
          <div className={styles.trackGrowth}>TRACK GROWTH</div>
          <div className={styles.listProduct}>LIST PRODUCT</div>
          <img className={styles.editIcon} alt="" src="/edit.svg" />
        </div>
      </footer>
    </div>
  );
};

export default FrameComponent;
