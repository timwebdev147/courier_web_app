'use client';

import { Divider } from "@mui/material";
import { redirect, useParams } from "next/navigation";
import styles from "@/styles/tracker.module.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ErrorOutline } from "@mui/icons-material";
import CustomizedSteppers from "../../../../../components/stepperComponent";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';



const orderInfo:React.FC = () => {

    type deliveryType = {
        _id: string,
        trackingID: string,
        productName: string,
        recipientName: string,
        recipientNumber: string,
        description: string,
        destinationAddress: string,
        deliveryStatus: number,
        deliveryDate: string,
        createdAt: string,
        updatedAt: string,
        __v: number
    }

    const params = useParams()
    const router = useRouter()
    let trackingCode = params.trackingCode as string;
    const [activeStep, setActiveStep] = useState<number>(0)
    const [deliveryInfo, setDeliveryInfo] = useState<deliveryType>()
    const [deliveryDate, setDeliveryDate] = useState<string>()
    const [mounted, setMounted] = useState<boolean>(false)
    const [progress, setProgress] = useState<number>(0);
    
    const steps = ['Order confirmed', 'Picked by courier', 'In transit', "Ready for pickup", "Picked up"];


    async function getDelivery() {
        await axios.get(`https://courier-api.onrender.com/api/delivery/${trackingCode}`)
        .then(res => {
            console.log(res.data);
            let deliveryDate = new Date(res.data.delivery[0].deliveryDate).toDateString();
            setDeliveryDate(deliveryDate)
            setDeliveryInfo(res.data.delivery[0])
            setMounted(true)
        })
        .catch(err => {
            console.log(err)
            setMounted(true)
            // router.push("/track-order")
        })
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
              if (oldProgress === 100) {
                return 0;
              }
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 100);
            });
          }, 5);
      
          return () => {
            clearInterval(timer);
          };
        }, [])

    useEffect(() => {
        getDelivery()
    }, [])


    return (
        
        <main>
            <Divider />
        {
            !mounted?
            <Box sx={{ width: '100%', color: 'black', padding: '50px 0' }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>:
            !deliveryInfo? 
            <div className={styles.notFound}>
                <ErrorOutline className={styles.icon}/>
                <h1>No delivery for this tracking ID: {trackingCode}</h1>
                <a href="/track-order">Input a valid Tracking ID. </a>
            </div>
            :
            <div className={styles.container}>
            <h4>Tracking ID: {trackingCode}</h4>
            <div className={styles.deliveryInfo}>
                <div> 
                    <p>Estimated Delivery:</p>
                    <p>{deliveryDate}</p>
                </div>
                <div>
                    <p>Shipping BY:</p>
                    <p>Crystal Royal Logistics</p>
                </div>
                <div>
                    <p>Status</p>
                    <p>{steps[deliveryInfo?.deliveryStatus]}</p>
                </div>
                <div>
                    <p>Tracking #:</p>
                    <p>{deliveryInfo.trackingID}</p>
                </div>
            </div>
            <div className={styles.stepperContainer}>
            <CustomizedSteppers steps={steps} activeStep={deliveryInfo.deliveryStatus}/>
            </div>
            <Divider />
            <h4>Tracking information</h4>
            <div className={styles.deliveryInfo}>
                <div> 
                    <p>Item name:</p>
                    <p>{deliveryInfo.productName}</p>
                </div>
                <div>
                    <p>Recipient:</p>
                    <p>{`${deliveryInfo.recipientName},| ${deliveryInfo.recipientNumber}`}</p>
                </div>
                <div>
                    <p>Item Description</p>
                    <p>{deliveryInfo.description}</p>
                </div>
                <div>
                    <p>Destination</p>
                    <p>{deliveryInfo.destinationAddress}</p>
                </div>
            </div>
            </div>
            }
        </main>

    )
}




export default orderInfo;