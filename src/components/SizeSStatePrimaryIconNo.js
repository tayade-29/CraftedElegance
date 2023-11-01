import { useMemo } from "react";
import styles from "./SizeSStatePrimaryIconNo.module.css";

const SizeSStatePrimaryIconNo = ({
  showChatWitHUs,
  sizeSStatePrimaryIconNoBackgroundColor,
  sizeSStatePrimaryIconNoPosition,
  sizeSStatePrimaryIconNoTop,
  sizeSStatePrimaryIconNoLeft,
  sizeSStatePrimaryIconNoWidth,
  sizeSStatePrimaryIconNoHeight,
  chatWitHUsColor,
}) => {
  const sizeSStatePrimaryIconNoStyle = useMemo(() => {
    return {
      backgroundColor: sizeSStatePrimaryIconNoBackgroundColor,
      position: sizeSStatePrimaryIconNoPosition,
      top: sizeSStatePrimaryIconNoTop,
      left: sizeSStatePrimaryIconNoLeft,
      width: sizeSStatePrimaryIconNoWidth,
      height: sizeSStatePrimaryIconNoHeight,
    };
  }, [
    sizeSStatePrimaryIconNoBackgroundColor,
    sizeSStatePrimaryIconNoPosition,
    sizeSStatePrimaryIconNoTop,
    sizeSStatePrimaryIconNoLeft,
    sizeSStatePrimaryIconNoWidth,
    sizeSStatePrimaryIconNoHeight,
  ]);

  const chatWitHUsStyle = useMemo(() => {
    return {
      color: chatWitHUsColor,
    };
  }, [chatWitHUsColor]);

  return (
    <div
      className={styles.sizesStateprimaryIconno}
      style={sizeSStatePrimaryIconNoStyle}
    >
      {showChatWitHUs && (
        <div className={styles.chatWithUs} style={chatWitHUsStyle}>
          Chat witH us
        </div>
      )}
    </div>
  );
};

export default SizeSStatePrimaryIconNo;
