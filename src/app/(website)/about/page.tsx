import Image from "next/image";
import styles from "@/styles/about.module.scss";
import Indicator from "../../../../components/indicator"; 
import { CheckBox, LocalShipping, Security } from "@mui/icons-material";
import partner from '../../images/partner.jpg';
import Assets from "../../../../components/assets";
import { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: 'About us crystal royal logistics',
}

export default function About() {



  return (
    <main>
      <Indicator page="about" />
      <div className={styles.firstContainer}>
        <div className={styles.firstRow}>

        <div>
          <h1>Our services</h1>
          <h2>Scheduled Delivery Service</h2>
          <ul>
            <li>Overnight service</li>
            <li>Door to door same-day service</li>
            <li>Dedicated driver options</li>
          </ul>
        </div>
        <div>
          <CheckBox className={styles.icon} />
          <div>
            <h1>CUSTOMER SERVICE</h1>
            <p>+44 7442 457544 </p>
          </div>
        </div>
        </div>

        <div className={styles.secondRow}>
            <div>
              <LocalShipping className={styles.icon} />
              <div>
                <h1>SHIPPING</h1>
                <p>
                  Local or out-of-town rush delivery; 
                  Budget on-demand options within our routed system; 
                  and Latest technology delivery confirmation 
                </p>
              </div>
            </div>
            <div>
              <Security className={styles.icon} />
              <div>
                <h1>PROTECTION POLICY</h1>
                <p>
                  Rural stations and branches are established, 
                  and rural delivery is provided, according to USPS 
                  policies and procedures, the characteristics of 
                  the area to be served, and the methods needed 
                  to provide adequate service. 
                </p>
              </div>
            </div>
        </div>
      </div>
      <Assets/>
      <div className={styles.secondContainer}>
        <div className={styles.imageContainer} >
          <Image alt="become our partner" className={styles.image} width={0} height={0} src={partner}/>
        </div>
        <div className={styles.secondColumn}>
          <h1>Become Our Partners</h1>
          <p>
            We are a shipping company located in California. We accept Investments 
            from any one who is willing and able to invest in Central courier . 
            Hence you become a share holder at our company . Having invested in us 
            will give you as many benefits as you can count . You will be on a steady 
            income percentage each month depending on how much you invest . We are 
            open to the whole world an investor can come from any country and any race .
            In order to proceed with your investment at Crystal Royal Group Logistics You can 
            kindly contact us Through email or call an agent . An investment 
            Plan will be sent to you via email and you choose what plan you will love to take.
          </p>
          <a href="/contact-us">contact us</a>
        </div>
      </div>
    </main>
  );
}
