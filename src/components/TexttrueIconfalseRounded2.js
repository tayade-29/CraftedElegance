import { useMemo } from "react";
import styles from "./TexttrueIconfalseRounded2.module.css";

const TexttrueIconfalseRounded2 = ({
  h6,
  texttrueIconfalseRoundedBackgroundColor,
  texttrueIconfalseRoundedPosition,
  texttrueIconfalseRoundedTop,
  texttrueIconfalseRoundedLeft,
  texttrueIconfalseRoundedWidth,
  texttrueIconfalseRoundedHeight,
  h6FontSize,
  h6Color,
}) => {
  const texttrueIconfalseRounded2Style = useMemo(() => {
    return {
      backgroundColor: texttrueIconfalseRoundedBackgroundColor,
      position: texttrueIconfalseRoundedPosition,
      top: texttrueIconfalseRoundedTop,
      left: texttrueIconfalseRoundedLeft,
      width: texttrueIconfalseRoundedWidth,
      height: texttrueIconfalseRoundedHeight,
    };
  }, [
    texttrueIconfalseRoundedBackgroundColor,
    texttrueIconfalseRoundedPosition,
    texttrueIconfalseRoundedTop,
    texttrueIconfalseRoundedLeft,
    texttrueIconfalseRoundedWidth,
    texttrueIconfalseRoundedHeight,
  ]);

  const h6Style = useMemo(() => {
    return {
      fontSize: h6FontSize,
      color: h6Color,
    };
  }, [h6FontSize, h6Color]);

  return (
    <div
      className={styles.texttrueIconfalseRounded}
      style={texttrueIconfalseRounded2Style}
    >
      <b className={styles.h6} style={h6Style}>
        {h6}
      </b>
    </div>
  );
};

export default TexttrueIconfalseRounded2;
