import { useMemo } from "react";
import styles from "./FormContainer.module.css";

const FormContainer = ({
  actionButtonText,
  ctaButtonText,
  wHISHLISTYOURPRODUCTTop,
  wHISHLISTYOURPRODUCTLeft,
  lISTPRODUCTTop,
  propTop,
  propLeft,
}) => {
  const featuresStyle = useMemo(() => {
    return {
      top: wHISHLISTYOURPRODUCTTop,
      left: wHISHLISTYOURPRODUCTLeft,
    };
  }, [wHISHLISTYOURPRODUCTTop, wHISHLISTYOURPRODUCTLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      top: lISTPRODUCTTop,
    };
  }, [lISTPRODUCTTop]);

  const eNJOYDISCOUNTsStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.features} style={featuresStyle}>
      <div className={styles.preview01}>
        <img
          className={styles.fullScreenBlackSmartphoneMIcon}
          alt=""
          src="/full-screen-black-smartphone-mockup-design-5-1@2x.png"
        />
      </div>
      <div className={styles.featuresChild} style={rectangleDivStyle} />
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
      <img className={styles.fourSquaresIcon} alt="" src="/four-squares.svg" />
      <div className={styles.createAccount}>CREATE ACCOUNT</div>
      <div className={styles.getProductReviews}>GET PRODUCT REVIEWS</div>
      <div className={styles.whishlistYourProduct}>{actionButtonText}</div>
      <div className={styles.enjoyDiscounts} style={eNJOYDISCOUNTsStyle}>
        {ctaButtonText}
      </div>
      <div className={styles.trackGrowth}>TRACK GROWTH</div>
      <div className={styles.listProduct}>LIST PRODUCT</div>
      <img className={styles.editIcon} alt="" src="/edit.svg" />
    </div>
  );
};

export default FormContainer;
