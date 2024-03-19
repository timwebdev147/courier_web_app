import React from "react";
import Counter from "./counter";
import styles from "@/styles/assets.module.scss";




const Assets:React.FC = () =>{


    return(
        <main>
            <div className={styles.assets}>
                <div>
                    <span><Counter number={"3092"} duration={"2"} label="SAFE CARGO" /></span>
                </div>
                <div>
                    <span><Counter number={"564"} duration={"1"} label="WARE HOUSE" /></span>
                </div>
                <div>
                    <span><Counter number={"150"} duration={"1"} label="OPERATING COUNTRIES" /></span>
                </div>
                <div>
                    <span><Counter number={"300"} duration={"1"} label="REPRESENTATIVE OFFICES" /></span>
                </div>
                
                
                
                
            </div>
        </main>
    )
}

export default Assets;