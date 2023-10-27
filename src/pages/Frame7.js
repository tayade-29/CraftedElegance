import FormContainer1 from "../components/FormContainer1";
import styles from "./Frame7.module.css";

const Frame7 = () => {
  return (
    <div className={styles.navbarStyle8NavbarLightParent}>
      <div className={styles.navbarStyle8NavbarLight}>
        <div className={styles.navbarDark}>
          <div className={styles.collapseNavbarCollapse}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.colMd4}>
                  <b className={styles.h6}>Follow Us :</b>
                  <div className={styles.socialMedia}>
                    <div className={styles.a}>
                      <img
                        className={styles.icnSettingsIcnXs}
                        alt=""
                        src="/icn-settings-icnxs.svg"
                      />
                    </div>
                    <div className={styles.a1}>
                      <img
                        className={styles.icnSettingsIcnXs}
                        alt=""
                        src="/icn-settings-icnxs1.svg"
                      />
                    </div>
                    <div className={styles.a2}>
                      <img
                        className={styles.icnSettingsIcnXs}
                        alt=""
                        src="/icn-settings-icnxs2.svg"
                      />
                    </div>
                    <div className={styles.a3}>
                      <img
                        className={styles.icnSettingsIcnXs}
                        alt=""
                        src="/icn-settings-icnxs3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.navbarBrand} />
          <b className={styles.craftedElegance}>
            <span>Crafted</span>
            <span className={styles.span}>{` `}</span>
            <span>Elegance</span>
          </b>
        </div>
        <div className={styles.navbarLight}>
          <div className={styles.navbarToggler}>
            <div className={styles.navbarTogglerIcon} />
          </div>
          <div className={styles.collapseNavbarCollapse1}>
            <div className={styles.navbarNav}>
              <div className={styles.li}>
                <div className={styles.a4} />
              </div>
              <div className={styles.li1}>
                <div className={styles.a5} />
              </div>
            </div>
            <b className={styles.link}>About</b>
            <div className={styles.li2}>
              <div className={styles.a6} />
              <b className={styles.link1}>Home</b>
            </div>
            <b className={styles.link2}>Contact</b>
          </div>
          <div className={styles.navbarLightChild} />
        </div>
        <img className={styles.profile1Icon} alt="" src="/profile-1@2x.png" />
      </div>
      <img className={styles.frameChild} alt="" src="/rectangle-9.svg" />
      <b className={styles.viewsOrdersPendingContainer}>
        <p className={styles.views}>Views</p>
        <p className={styles.views}>Orders</p>
        <p className={styles.views}>Pending Orders</p>
        <p className={styles.views}>Product</p>
        <p className={styles.views}>{`Total Profit `}</p>
        <p className={styles.views}>refunded</p>
        <p className={styles.views}>Dashboard</p>
        <p className={styles.views}>Profile</p>
        <p className={styles.reviews}>Reviews</p>
        <p className={styles.views}>Get Help</p>
      </b>
      <FormContainer1 />
    </div>
  );
};

export default Frame7;
