import Image from "next/image";
import styles from "@/styles/indicator.module.scss";
import React from "react";


interface propTypes {
    page: string
}
const Indicator:React.FC<propTypes> = ({page}) => {
  return (
      <div className={styles.indicator}>
        <h1>{page}</h1>
      </div>
  );
}


export default Indicator;