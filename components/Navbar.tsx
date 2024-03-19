'use client';

import { linkTypes } from '@/helpers/typeStructure';
import logo from '../src/app/images/logo.png';
import styles from '@/styles/navbar.module.scss'
import Image from "next/image";
import  Link  from "next/link";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './logo';
import { Close, Menu } from '@mui/icons-material';



const Navbar:React.FC = () => {

    const navLinks:linkTypes[] = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About us",
            link: "/about"
        },
        {
            title: "Track Order",
            link: "/track-order"
        },
        {
            title: "Contact us",
            link: "/contact-us"
        }
    ]
    const [clicked, setClicked] = useState(false)
    const pathname = usePathname()
    
    function toggleDropdown(){
        clicked? setClicked(false): setClicked(true)
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.logo_container}>
                <Logo/>
            </div>

            <button onClick={() => toggleDropdown()} className={styles.dropdownIcon}>
                {
                    clicked? <Close className={styles.icon}/>: <Menu className={styles.icon}/>
                }
                
            </button>

            <div className={clicked? styles.links_container: `${styles.links_container} ${styles.hide}`}>
                {
                    navLinks.map((menu, index) => {
                        return <a style={menu.link === pathname?{color: "#003c92"}: {color: "initial"}} href={menu.link} key={index}>{menu.title}</a>
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar;