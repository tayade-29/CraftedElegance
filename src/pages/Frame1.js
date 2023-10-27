import FormContainer from "../components/FormContainer";
import styles from "./Frame1.module.css";

const Frame1 = () => {
  return (
    <div className={styles.craftedEleganceParent}>
      <b className={styles.craftedElegance}>Crafted Elegance</b>
      <b className={styles.registerAsA}>Register as a new User</b>
      <FormContainer
        actionButtonText="VIEW DASSHBOARDCT"
        ctaButtonText="VIEW INCOME"
        wHISHLISTYOURPRODUCTTop="1411px"
        wHISHLISTYOURPRODUCTLeft="75px"
        lISTPRODUCTTop="107px"
        propTop="401px"
        propLeft="1354px"
      />
    </div>
  );
};

export default Frame1;
