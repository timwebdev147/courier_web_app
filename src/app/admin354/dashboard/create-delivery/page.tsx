'use client';
import styles from "@/styles/admin/createDelivery.module.scss";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../../../../components/Spinner";


type optionType = {
    value: number,
    text: string
}

type formType = {
    label: string,
    name: string,
    value: string | number | Date,
    width: string,
    placeHolder: string,
    type: string,
    options?: Array<optionType>
}
type createDeliveryType = {
    [key: string]: any;
    productName?: string | undefined,
    recipientName?: string | undefined,
    recipientNumber?: string | undefined,
    description?: string | undefined,
    destinationAddress?: string | undefined,
    deliveryStatus?: number | undefined,
    deliveryDate?: Date | undefined
}


const CreateDelivery:React.FC = () => {
    const formFields:formType[] = [
        {
            label: "Product Name",
            name: "productName",
            value: "",
            width: "",
            placeHolder: "Product Name",
            type: "text"
        },
        {
            label: "Recipient Name",
            name: "recipientName",
            value: "",
            width: "halfWidth",
            placeHolder: "Recipient Name",
            type: "text"
        },
        {
            label: "Recipient Number",
            name: "recipientNumber",
            value: "",
            width: "halfWidth",
            placeHolder: "Recipient Number",
            type: "text"
        },
        {
            label: "Select Delivery Status",
            name: "deliveryStatus",
            value: "0",
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
            value: "",
            width: "",
            placeHolder: "Product description",
            type: "textArea"
        },
        {
            label: "Destination address",
            name: "destinationAddress",
            value: "",
            width: "",
            placeHolder: "Destination address",
            type: "text"
        },
        {
            label: "Delivery Date",
            name: "deliveryDate",
            value: "",
            width: "halfWidth",
            placeHolder: "Delivery Date",
            type: "date"
        }
    ]

    const [fields, setFormFields] = useState<formType[]>(formFields);
    const [clicked, setClicked] = useState<boolean>(false)

    function handleChange(value: any, index: number){
        let clonedFields = fields
        clonedFields[index].value = value;
        setFormFields(clonedFields)
    }

    function submit(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        let token = localStorage.getItem('token')
        setClicked(true)
        let requestObject: Partial<createDeliveryType> = {};
        fields.forEach(field => {
            requestObject[field.name] = field.value;

        })
        
        axios.post("https://courier-api.onrender.com/api/delivery", requestObject, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            setFormFields(formFields)
            setClicked(false)
            toast.success(`you've successfully created a delivery, this is your tracking ID ${response.data.response.trackingID} `)
        })
        .catch(err => {
            setClicked(false)
        })
    }


    return(
        <main className={styles.container}>
        <ToastContainer/>
            <form action="">
                {
                    fields.map((field, index) => (
                        <div className={styles[field.width]} key={index}>
                            <label htmlFor="">{field.label}</label>
                            {
                                field.type == "textArea"?
                                <textarea onChange={(e) => handleChange(e.target.value, index)} name="" id="" placeholder={field.placeHolder} cols={30} rows={10}></textarea>:
                                field.type == "select"?
                                <select onChange={(e) => handleChange(e.target.value, index)} name="" id="">
                                    {
                                        field.options?.map((option, index) => (
                                            <option key={index} value={option.value}>{option.text}</option>
                                        ))
                                    }
                                </select>:
                                <input onChange={(e) => handleChange(e.target.value, index)} type={field.type} placeholder={field.placeHolder} />
                            }
                        </div>
                    ))
                }
                <button onClick={e => submit(e)}>{clicked?<Spinner size={22} color={'red'} thickness={4}/>:"submit"}</button>

            </form>
        </main>
    )
}



export default CreateDelivery;