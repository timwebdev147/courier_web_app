import React from "react";

import styles from '@/styles/spinner.module.scss';

interface propTypes {
    size: number,
    color: string,
    thickness: number
}
const Spinner:React.FC<propTypes> = ({ size, color, thickness }) => {
    return (
        <div className={styles.spinner} style={{ width: `${size}px`, height: `${size}px`, borderTop: `${thickness}px solid ${color}`}}/>
    )
}


export default Spinner
