import styles from "./Frame3.module.css";

const Frame3 = () => {
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
      <div className={styles.frameChild} />
    </div>
  );
};

export default Frame3;
