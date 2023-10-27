import PhoneNoForm1 from "./PhoneNoForm1";
import UploadPhotoForm from "./UploadPhotoForm";
import FilteredCardForm from "./FilteredCardForm";
import JoinUsForm from "./JoinUsForm";
import StoreNameCard from "./StoreNameCard";
import FilteredCardFormContainer from "./FilteredCardFormContainer";
import PropertyForm from "./PropertyForm";
import PropertyCardForm from "./PropertyCardForm";
import DiscountsFormContainer from "./DiscountsFormContainer";
import PriceGSTContainer from "./PriceGSTContainer";
import styles from "./PhoneNoForm.module.css";

const PhoneNoForm = () => {
  return (
    <div className={styles.component}>
      <PhoneNoForm1 />
      <UploadPhotoForm />
      <FilteredCardForm />
      <JoinUsForm />
      <StoreNameCard />
      <FilteredCardFormContainer />
      <PropertyForm />
      <PropertyCardForm />
      <DiscountsFormContainer />
      <PriceGSTContainer />
    </div>
  );
};

export default PhoneNoForm;
