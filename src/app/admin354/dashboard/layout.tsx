'use client'
import { Divider } from "@mui/material";
import styles from "@/styles/admin/dashboard.module.scss";
import Logo from "../../../../components/logo";
import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const pathname = usePathname()
  
  const navigate = useRouter()
  // navigate.

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token == "" || token == undefined || token == null) {
      navigate.push("/admin354/login")
    }
    console.log(pathname)
  }
  )

  function logout(){
    localStorage.setItem("token", "")
    navigate.push("/admin354/login")
  }
  return (
    <html lang="en">
      <body>
        
      <main>
        <Logo/>
            <Divider/>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                  <ul>
                    <li onClick={() => navigate.push('/admin354/dashboard/create-delivery')} style={"/admin354/dashboard/create-delivery" === pathname?{color: "#003c92"}: {color: "initial"}}>
                    create Delivery<KeyboardArrowRight/>
                    </li>
                    <li onClick={() => navigate.push('/admin354/dashboard/deliveries')} style={"/admin354/dashboard/deliveries" === pathname?{color: "#003c92"}: {color: "initial"}}>
                    manage Deliveries<KeyboardArrowRight/>
                    </li>
                  </ul>
                    <button onClick={() => logout()}>logout</button>
                </div>
                <Divider orientation="vertical" variant="middle" flexItem  />
                <div className={styles.routeView}>
                  {children}
                </div>
            </div>
        </main>
      </body>
    </html>
  )
}
