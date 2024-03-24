import logo from "@/app/images/logo.png";
import styles from "@/styles/logo.module.scss"
import Image from "next/image";

const Logo:React.FC = () => {


    return(
        
        <div className={styles.logo_container}>
        <Image src={logo} alt={'Crystal Royal Logistics'} width={0} height={0} />
        </div>
    )
}


export default Logo