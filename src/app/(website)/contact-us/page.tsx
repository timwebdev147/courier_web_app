"use client";
import Image from "next/image";
import Indicator from "../../../../components/indicator";
import styles  from "@/styles/contact.module.scss"
import React, { useState } from "react";
import { Mail, PhoneAndroid, Search } from "@mui/icons-material";
import { Metadata } from 'next'
 

const ContactUs:React.FC = () => {
  

  interface handleChangePropType{
    value: string,
    index: number
  }
  
  const form = [
    {
      name: "firstName",
      type: "text",
      width: "half",
      label: "Name",
      secondLabel: "first",
      required: true,
      value: ""
    },
    {
      name: "lastName",
      type: "text",
      width: "half",
      label: "",
      secondLabel: "last",
      required: "",
      value: ""
    },
    {
      name: "number",
      type: "",
      width: "full",
      label: "Numbers",
      required: "",
      value: ""
    },
    {
      name: "email",
      type: "",
      width: "full",
      label: "Email ",
      required: true,
      value: ""
    },
    {
      name: "message",
      type: "textarea",
      width: "",
      label: "Comment or Message",
      required: "",
      value: ""
    }
  ]
  const [formFields, setFormFields] = useState(form);

  function handleChange (value:string, index:number){
    let clonedFields = [...formFields]
    clonedFields[index].value= value;
    setFormFields(clonedFields)
  }

  return (
    <main>
      <Indicator page="contact us" />
      <div className={styles.firstContainer}>
        <div>
        <h1>Send Us A Message</h1>
        <p>Please endeavor to fill in the appropriate 
          information below and accordingly to ensure 
          that we get to you and respond correctly.  
        </p>
          <form action="">
            {
              formFields.map((field, index) => (
                 <div key={index}>
                  <label htmlFor="">{field.label}{field.required == true?<span>*</span>: null}</label>
                  {
                    field.type == "textarea"?
                    <textarea name={field.name} id="" cols={30} rows={10}></textarea>:
                  <input className={styles[field.width]} type={field.type}  />
                  }
                  {field.width == "half"?<p>{field.secondLabel}</p>:null}
                </div>
              ))
            }
          </form>
          <button>Submit</button>
        </div>
        <div></div>
      </div>
      <div className={styles.secondContainer}>
            <div>
              <Search className={styles.icon} />
              <div>
                <h1>OUR LOCATIONS</h1>
                <p>
                USA Carlifornia
                </p>
                <p>UK London</p>
              </div>
            </div>
            <div>
              <Mail className={styles.icon} />
              <div>
                <h1>GET IN TOUCH</h1>
                <p>
                  Fill in the required information in 
                  the form provided above and we will 
                  get back to you as soon as possible. 
                </p>
              </div>
            </div>
            <div>
              <PhoneAndroid className={styles.icon} />
              <div>
                <h1>HOTLINE 24/7 </h1>
                <p>
                  +44 7442 457544  
                </p>
                <p>
                  Contact@crystalroyallogistics.org
                </p>
                
              </div>
            </div>
      </div>
      <div className={styles.mapContainer} >
        <iframe style={{width: "100%", height: "400px", border: "none", boxSizing: "border-box"}} width="100%" height="400"   src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          {/* <a href="https://www.gps.ie/">gps vehicle tracker</a> */}
        </iframe>
      </div>
    </main>
  );
}


export default ContactUs;