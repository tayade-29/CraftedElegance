import FormContainer2 from "../components/FormContainer2";
import TexttrueIconfalseRounded1 from "../components/TexttrueIconfalseRounded1";
import FormContainer from "../components/FormContainer";
import styles from "./Frame9.module.css";

const Frame9 = () => {
  return (
    <div className={styles.craftedEleganceParent}>
      <b className={styles.craftedElegance}>Crafted Elegance</b>
      <b className={styles.alreadyAnUser}>Already an user, login</b>
      <FormContainer2 />
      <TexttrueIconfalseRounded1
        h3="Login"
        texttrueIconfalseRoundedBackgroundColor="#23856d"
        texttrueIconfalseRoundedPosition="absolute"
        texttrueIconfalseRoundedTop="636px"
        texttrueIconfalseRoundedLeft="902px"
        h3FontFamily="Vollkorn"
        h3Color="rgba(0, 0, 0, 0.5)"
      />
      <FormContainer
        actionButtonText="VIEW DASSHBOARDCT"
        ctaButtonText="VIEW INCOME"
        wHISHLISTYOURPRODUCTTop="823px"
        wHISHLISTYOURPRODUCTLeft="75px"
        lISTPRODUCTTop="107px"
        propTop="401px"
        propLeft="1354px"
      />
    </div>
  );
};

export default Frame9;
