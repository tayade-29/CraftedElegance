import styles from "./UploadPhotoForm.module.css";

const UploadPhotoForm = () => {
  return (
    <div className={styles.property1defaultLgfalse}>
      <div className={styles.formControl}>Upload Photo</div>
      <div className={styles.formControlInputStyle1}>
        <div className={styles.inputformControl}>
          <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default UploadPhotoForm;
