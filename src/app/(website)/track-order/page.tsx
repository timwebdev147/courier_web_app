'use client'
import Image from "next/image";
import styles from "@/styles/trackOrder.module.scss"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "../../../../components/Spinner";

export default function TrackOrder() {
  const router =  useRouter()
  const [code, setCode] = useState<string>()
  const [error, setError] = useState<string>()
  const [clicked, setClicked] = useState<boolean>(false)
  
  function trackID() {
    if (!code) {
      return setError("field cannot be empty")
    }
    setClicked(true)
    router.push(`/track-order/${code}`)
  }

  
  return (
    <main>
      <div className={styles.container}>
        <div>
            <h1>Enter the Consignment No.</h1>
            <div>
                <input onChange={e => {setCode(e.target.value); e.target.value? setError(""): null}} type="text" placeholder="Enter Tracking Number" />
                <button onClick={() => trackID()}>{clicked?<Spinner size={22} color={'red'} thickness={4}/>:"Track result"}</button>
            </div>
            <small style={{color: "red"}}>{error}</small>
            <p>Ex: 123456</p>
        </div>
      </div>
    </main>
  );
}
