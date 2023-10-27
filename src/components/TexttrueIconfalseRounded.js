import { useMemo } from "react";
import styles from "./TexttrueIconfalseRounded.module.css";

const TexttrueIconfalseRounded = ({
  buttonText,
  texttrueIconfalseRoundedBackgroundColor,
}) => {
  const texttrueIconfalseRoundedStyle = useMemo(() => {
    return {
      backgroundColor: texttrueIconfalseRoundedBackgroundColor,
    };
  }, [texttrueIconfalseRoundedBackgroundColor]);

  return (
    <div
      className={styles.texttrueIconfalseRounded}
      style={texttrueIconfalseRoundedStyle}
    >
      <b className={styles.btnText}>{buttonText}</b>
    </div>
  );
};

export default TexttrueIconfalseRounded;
