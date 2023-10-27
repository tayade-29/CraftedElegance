import { useMemo } from "react";
import styles from "./TexttrueIconfalseRounded1.module.css";

const TexttrueIconfalseRounded1 = ({
  h3,
  texttrueIconfalseRoundedBackgroundColor,
  texttrueIconfalseRoundedPosition,
  texttrueIconfalseRoundedTop,
  texttrueIconfalseRoundedLeft,
  h3FontFamily,
  h3Color,
}) => {
  const texttrueIconfalseRounded1Style = useMemo(() => {
    return {
      backgroundColor: texttrueIconfalseRoundedBackgroundColor,
      position: texttrueIconfalseRoundedPosition,
      top: texttrueIconfalseRoundedTop,
      left: texttrueIconfalseRoundedLeft,
    };
  }, [
    texttrueIconfalseRoundedBackgroundColor,
    texttrueIconfalseRoundedPosition,
    texttrueIconfalseRoundedTop,
    texttrueIconfalseRoundedLeft,
  ]);

  const h3Style = useMemo(() => {
    return {
      fontFamily: h3FontFamily,
      color: h3Color,
    };
  }, [h3FontFamily, h3Color]);

  return (
    <div
      className={styles.texttrueIconfalseRounded}
      style={texttrueIconfalseRounded1Style}
    >
      <b className={styles.h3} style={h3Style}>
        {h3}
      </b>
    </div>
  );
};

export default TexttrueIconfalseRounded1;
