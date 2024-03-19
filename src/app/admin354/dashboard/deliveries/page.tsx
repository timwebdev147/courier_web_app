'use client';

import { Divider, Icon } from "@mui/material";
import styles from "@/styles/admin/delivery.module.scss";
import { Delete, Edit, EventNote, MoreVert } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingTable from "../../../../../components/loadingTable/index";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Delivery:React.FC = () =>{

    type productType = {
        _id: string,
        trackingID?: string,
        productName?: string | undefined,
        recipientName?: string | undefined,
        recipientNumber?: string | undefined,
        description?: string | undefined,
        destinationAddress?: string | undefined,
        deliveryStatus: number,
        deliveryDate?: Date | undefined
    }
    
    const [products, setProducts] = useState<productType[]>([])
    const [totalProducts, setTotalProduct] = useState<number>(0)
    const router = useRouter()
    const steps = ['Order confirmed', 'Picked by courier', 'In transit', "Ready for pickup", "Picked up"];
    const [showActionsIndex, setShowActionsIndex] = useState<number | null>(null)
    let token:String | null;
    if (typeof window !== 'undefined' ) {
        token = localStorage.getItem('token')
    }


    function get_products(){
        axios.get("https://courier-api.onrender.com/api/delivery", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
            let productss = res.data.delivery;
            setTotalProduct(productss.length)
            setProducts(productss)
            console.log(productss);
        })
        .catch(err => {
            console.log(err);
        })
    }

    function delete_product(id: string){

        
        axios.delete(`https://courier-api.onrender.com/api/delivery/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => {
            console.log(res.data);
            toast.success("deleted successfully.")
            let filter_product = products.filter(product => {
                return product._id != id;
            })
            setProducts(filter_product)
            setTotalProduct(totalProducts - 1)
        }).catch(error => toast.error("delete was not successful"))
    }

    function show_actions(index: number){
        if(index == showActionsIndex){
            setShowActionsIndex(null)
        }else{
            setShowActionsIndex(index)
        }
    }

    useEffect(() => {
        get_products()
    }, [])


    return(
        <div>
            <ToastContainer/>
            <div className={styles.itemLists}>
                <div className={styles.tags}>
                    <div>Product Name</div>
                    <div className={styles.midCont}>
                        <div>Recipient Name</div>
                        <div>Rcipient Number</div>
                        <div>Estimated Delivery</div>
                        <div>Delivery Status</div>
                    </div>
                    <div>Actions</div>
                </div>
                <Divider/>
                {
                    products?.length > 0?products.map((product, index) => (

                    <div className={styles.product}>
                        <div className={styles.name}>
                            <span className={styles.iconCont}><EventNote/></span>
                            <div className={styles.text}>
                                <p>{product.productName}</p>
                                <p>Tracking ID: <b>{product.trackingID}</b></p>
                            </div>
                        </div>
                        <div className={styles.midCont}>
                            <div>{product.recipientName}</div>
                            <div>{product.recipientNumber}</div>
                            <div>{dayjs(product.deliveryDate).format('DD-MM-YYYY')}</div>
                            <div>{steps[product.deliveryStatus]}</div>
                        </div>
                        <div onClick={() => show_actions(index)}>
                            <MoreVert/>
                            <div className={showActionsIndex == index ? styles.actions: styles.hide}>

                            <div onClick={() => router.push(`/admin354/dashboard/deliveries/${product.trackingID}`)}><Edit/> update</div>
                            <div onClick={() => delete_product(product._id)}><Delete/> delete</div>

                            </div>
                        </div>
                    </div>

                    )): <LoadingTable/>
                }
            </div>

            
            <div className={styles.total}>
                <p>Total : {totalProducts} deliveries</p>
            </div>
        </div>
    )
}



export default Delivery;