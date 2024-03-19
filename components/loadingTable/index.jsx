import { Skeleton } from "@mui/material";
import styles from "./index.module.scss"
import { useState } from "react";






const LoadingTable = () => {

    const [array, setArray] = useState([1,2,3,4,5])


return (
<>
{
    array.map(index => (

    <div key={index} className={styles.productLists}>
        <div  className={styles.product}>
                        
                        <div className={styles.name}>
                            
                            <span className={styles.iconCont}><Skeleton  variant="circular" width={40} height={40}/></span>
                            <div className={styles.text}>
                                
                                <p><Skeleton variant="text" width={70} height={10} /></p>
                                <p><Skeleton variant="text" width={20} height={10} /></p>
                            </div>
                        </div>
                        <div className={styles.midCont}>
                            <div><Skeleton variant="text" width={30} height={10} /></div>
                            <div><Skeleton variant="text" width={30} height={10} /></div>
                            <div><Skeleton variant="text" width={30} height={10} /></div>
                        </div>
                        <div >
                            <Skeleton className={styles.iconCont} variant="circular" width={20} height={20}/>

                        </div>
        </div>
    </div>
    ))
}
</>
)
}


export default LoadingTable;