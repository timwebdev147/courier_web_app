'use client';
import styles from "@/styles/admin/createDelivery.module.scss";
import axios from "axios";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../../../../../components/Spinner";


type optionType = {
    value: number,
    text: string
}

type formType = {
    label: string,
    name: string,
    value: string | number | Date | undefined,
    width: string,
    placeHolder: string,
    type: string,
    options?: Array<optionType>
}
type deliveryType = {
    [key: string]: any;
        _id: string | undefined,
        trackingID: string,
        productName: string,
        recipientName: string,
        recipientNumber: string,
        description: string,
        destinationAddress: string,
        deliveryStatus: number,
        deliveryDate: string | undefined,
        createdAt: string,
        updatedAt: string,
        __v: number
}


const UpdateDelivery:React.FC = () => {
    const params = useParams()
    const router = useRouter()
    const [deliveryInfo, setDeliveryInfo] = useState<deliveryType>()
    const [deliveryDate, setDeliveryDate] = useState<string>()
    let trackingCode = params.trackingCode as string;
    
    const formFields:formType[] = [
        {
            label: "Product Name",
            name: "productName",
            value: deliveryInfo?.productName,
            width: "",
            placeHolder: "Product Name",
            type: "text"
        },
        {
            label: "Tracking ID",
            name: "trackingID",
            value: deliveryInfo?.trackingID,
            width: "",
            placeHolder: "Tracking ID",
            type: "text"
        },
        {
            label: "Recipient Name",
            name: "recipientName",
            value: deliveryInfo?.recipientName,
            width: "halfWidth",
            placeHolder: "Recipient Name",
            type: "text"
        },
        {
            label: "Recipient Number",
            name: "recipientNumber",
            value: deliveryInfo?.recipientNumber,
            width: "halfWidth",
            placeHolder: "Recipient Number",
            type: "text"
        },
        {
            label: "Select Delivery Status",
            name: "deliveryStatus",
            value: deliveryInfo?.deliveryStatus,
            width: "",
            placeHolder: "",
            type: "select",
            options: [
                {
                    value: 0,
                    text: "Order confirmed"
                },
                {
                    value: 1,
                    text: "Picked by courier"
                },
                {
                    value: 2,
                    text: "In transit"
                },
                {
                    value: 3,
                    text: "Ready for pickup"
                },
                {
                    value: 4,
                    text: "Picked up"
                }
            ]
        },
        {
            label: "Product description",
            name: "description",
            value: deliveryInfo?.description,
            width: "",
            placeHolder: "Product description",
            type: "textArea"
        },
        {
            label: "Destination address",
            name: "destinationAddress",
            value: deliveryInfo?.destinationAddress,
            width: "",
            placeHolder: "Destination address",
            type: "text"
        },
        {
            label: "Delivery Date",
            name: "deliveryDate",
            value: deliveryDate,
            width: "halfWidth",
            placeHolder: "Delivery Date",
            type: "date"
        }
    ]
    
    const [fields, setFormFields] = useState<formType[]>(formFields);
    const [formData, setFormData] = useState<deliveryType>({
            _id: "",
            trackingID: "",
            productName: "",
            recipientName: "",
            recipientNumber: "",
            description: "",
            destinationAddress: "",
            deliveryStatus: 0,
            deliveryDate: "" ,
            createdAt: "",
            updatedAt: "",
            __v: 0
    });
    const [clicked, setClicked] = useState<boolean>(false)
  
    

    function handleChange(value: any, name: string) {
        let clonedData = formData;
        clonedData[name] = value;
        setFormData(clonedData);
        setFormFields(formFields);
    }

    function submit(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        let token = localStorage.getItem('token')
        setClicked(true)
        axios.put(`https://courier-api.onrender.com/api/delivery/${deliveryInfo?._id}`, formData, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setFormFields(formFields)
            console.log(response);
            setClicked(false)
            toast.success(`${response.data.message} `)
        })
        .catch(err => {
            setClicked(false)
            toast.error("delivery update was not successful")
        })
    }

    async function getDelivery() {
        await axios.get(`https://courier-api.onrender.com/api/delivery/${trackingCode}`)
        .then(res => {
            console.log(res.data);
            let deliveryDate = dayjs(res.data.delivery[0].deliveryDate).format('YYYY-MM-DD');
            setDeliveryDate(deliveryDate)
            setDeliveryInfo(res.data.delivery[0])
            updateFields(res.data.delivery[0], deliveryDate)
            console.log(deliveryDate);
            
        })
        .catch(err => {
            toast.error("tracking ID doesn't exist")
            router.push("/admin354/dashboard/deliveries")
            console.log(err)
            // router.push("/track-order")
        })
    }

    function updateFields(fields: deliveryType, date: string){
        let clonedFields = formData;
        clonedFields._id = fields?._id;
        clonedFields.trackingID = fields?.trackingID;
        clonedFields.productName = fields?.productName
        clonedFields.recipientName = fields?.recipientName
        clonedFields.recipientNumber = fields?.recipientNumber
        clonedFields.deliveryStatus = fields?.deliveryStatus
        clonedFields.destinationAddress = fields?.destinationAddress
        clonedFields.description = fields?.description
        clonedFields.deliveryDate = date

        console.log(deliveryDate);
        
        setFormData(clonedFields);
    }

    useEffect(() => {
        getDelivery()
    }, [])


    return(
        <main className={styles.container}>
        <ToastContainer/>
            <form action="">
                <h3 style={{color: "#003c92"}}>Update your delivery, tracking ID: {deliveryInfo?.trackingID}</h3>
                {
                    fields.map((field, index) => (
                        <div className={styles[field.width]} key={index}>
                            <label htmlFor="">{field.label}</label>
                            {
                                field.type == "textArea"?
                                <textarea onChange={e => handleChange(e.target.value, field.name)} value={formData[field.name]} name="" id="" placeholder={field.placeHolder} cols={30} rows={10}></textarea>:
                                field.type == "select"?
                                <select onChange={e => handleChange(e.target.value, field.name)} value={formData[field.name]} name="" id="">
                                    {
                                        field.options?.map((option, index) => (
                                            <option key={index} value={option.value}>{option.text}</option>
                                        ))
                                    }
                                </select>:
                                <input onChange={e => handleChange(e.target.value, field.name)} value={formData[field.name]} type={field.type} placeholder={field.placeHolder} />
                            }
                        </div>
                    ))
                }
                <button onClick={e => submit(e)}>{clicked?<Spinner size={22} color={'red'} thickness={4}/>:"submit"}</button>
            </form>
        </main>
    )
}



export default UpdateDelivery;