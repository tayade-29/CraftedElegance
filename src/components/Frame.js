import SizeSStatePrimaryIconNo from "./SizeSStatePrimaryIconNo";
import HeaderIcon from "./HeaderIcon";
import FormContainer from "./FormContainer";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.p51Parent}>
      <img className={styles.p51Icon} alt="" src="/p5-1@2x.png" />
      <img className={styles.p52Icon} alt="" src="/p5-2@2x.png" />
      <img className={styles.p91Icon} alt="" src="/p9-1@2x.png" />
      <SizeSStatePrimaryIconNo
        chatButtonText="Chat witH us"
        sizeSStatePrimaryIconNoBackgroundColor="#ab9a85"
        sizeSStatePrimaryIconNoPosition="absolute"
        sizeSStatePrimaryIconNoTop="1943px"
        sizeSStatePrimaryIconNoLeft="151px"
        sizeSStatePrimaryIconNoWidth="490px"
        sizeSStatePrimaryIconNoHeight="135px"
        chatWitHUsColor="rgba(188, 163, 127, 0.01)"
      />
      <SizeSStatePrimaryIconNo
        chatButtonText="Chat witH us"
        sizeSStatePrimaryIconNoBackgroundColor="#ab9a85"
        sizeSStatePrimaryIconNoPosition="absolute"
        sizeSStatePrimaryIconNoTop="1943px"
        sizeSStatePrimaryIconNoLeft="151px"
        sizeSStatePrimaryIconNoWidth="490px"
        sizeSStatePrimaryIconNoHeight="135px"
        chatWitHUsColor="rgba(188, 163, 127, 0.01)"
      />
      <SizeSStatePrimaryIconNo
        sizeSStatePrimaryIconNoBackgroundColor="#bca37f"
        sizeSStatePrimaryIconNoPosition="absolute"
        sizeSStatePrimaryIconNoTop="1943px"
        sizeSStatePrimaryIconNoLeft="188px"
        sizeSStatePrimaryIconNoWidth="546px"
        sizeSStatePrimaryIconNoHeight="135px"
        chatWitHUsColor="#e0cfba"
      />
      <SizeSStatePrimaryIconNo
        sizeSStatePrimaryIconNoBackgroundColor="rgba(188, 163, 127, 0.96)"
        sizeSStatePrimaryIconNoPosition="absolute"
        sizeSStatePrimaryIconNoTop="1943px"
        sizeSStatePrimaryIconNoLeft="1237px"
        sizeSStatePrimaryIconNoWidth="546px"
        sizeSStatePrimaryIconNoHeight="135px"
        chatWitHUsColor="rgba(188, 163, 127, 0.01)"
      />
      <div className={styles.buyer}>BUYER</div>
      <div className={styles.seller}>SELLER</div>
      <HeaderIcon />
      <img className={styles.p64Icon} alt="" src="/p6-4@2x.png" />
      <FormContainer
        actionButtonText="WHISHLIST YOUR PRODUCT"
        ctaButtonText="ENJOY DISCOUNTs"
      />
      <div className={styles.craftedElegance}>CRAFTED ELEGANCE</div>
    </div>
  );
};

export default Frame;
