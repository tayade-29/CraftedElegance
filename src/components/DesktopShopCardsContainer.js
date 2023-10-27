import styles from "./DesktopShopCardsContainer.module.css";

const DesktopShopCardsContainer = () => {
  return (
    <div className={styles.desktopShopCards31}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.mainContent}>
            <b className={styles.h2FeatureSection1}>EDITOR’S PICK</b>
            <div
              className={styles.paragraph}
            >{`Problems trying to resolve the conflict between `}</div>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.colMd6}>
            <div className={styles.cardItem}>
              <div className={styles.mediaBgCover}>
                <img
                  className={styles.cardCover20Icon}
                  alt=""
                  src="/cardcover20@2x.png"
                />
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/filter@2x.png"
                />
              </div>
              <div className={styles.cardContent}>
                <b className={styles.h2}>MEN</b>
              </div>
            </div>
          </div>
          <div className={styles.colMd3}>
            <div className={styles.cardItem1}>
              <div className={styles.mediaBgCover}>
                <img
                  className={styles.cardCover20Icon}
                  alt=""
                  src="/cardcover21@2x.png"
                />
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/filter1@2x.png"
                />
              </div>
              <div className={styles.cardContent1}>
                <b className={styles.h21}>WOMEN</b>
              </div>
            </div>
          </div>
          <div className={styles.colMd31}>
            <div className={styles.cardItem2}>
              <div className={styles.mediaBgCover}>
                <img
                  className={styles.cardCover20Icon}
                  alt=""
                  src="/cardcover22@2x.png"
                />
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/filter2@2x.png"
                />
              </div>
              <div className={styles.cardContent2}>
                <b className={styles.h21}>ACCESSORIES</b>
              </div>
            </div>
            <div className={styles.cardItem2}>
              <div className={styles.mediaBgCover}>
                <img
                  className={styles.cardCover20Icon}
                  alt=""
                  src="/cardcover23@2x.png"
                />
                <div className={styles.filter}>
                  <img className={styles.a61Icon} alt="" src="/a6-1@2x.png" />
                </div>
              </div>
              <div className={styles.cardContent3}>
                <b className={styles.h21}>Home Decor</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopShopCardsContainer;
