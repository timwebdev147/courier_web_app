import React from "react";
import styles from "../src/styles/footer.module.scss";
import { ChevronRight } from "@mui/icons-material";


const Footer:React.FC = () => {



    return (
        <footer className={styles.footer}>
            <div className={styles.firstFooter}>
                <div className={styles.firstSect}>
                    <h1>ABOUT US</h1>
                    <h2>Our Mission</h2>
                    <p>We strive to enhance the business of our customers
                        by providing superior delivery solutions for all 
                        of their same day package delivery needs.
                    </p>
                </div>
                <div className={styles.otherSectContainer}>
                    <div>
                        <h1>QUICK LINKS</h1>
                        <a href="/"><ChevronRight className={styles.icon}/> Home</a>
                        <a href="/about"><ChevronRight className={styles.icon}/>About</a>
                        <a href="/track-order"><ChevronRight className={styles.icon}/>Track an order</a>
                    </div>
                    <div>
                        <h1>CONTACT US</h1>
                        <a href="tel:+447765853883">+44 7765 853883</a>
                        <a href="mailto:contact@crystalroyallogistics.org">contact@crystalroyallogistics.org</a>
                    </div>
                </div>
            </div>
            <div className={styles.lastFooter}>
                Copyright©| Crystal Royal Logistics
            </div>
        </footer>
    )
}


export default Footer;