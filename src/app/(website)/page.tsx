"use client";
import Image from "next/image";
import styles from "@/styles/home.module.scss"
import { Call, EventAvailable, FormatQuoteRounded, Language, NearMe, StarRate, Work } from "@mui/icons-material";
import { firstInfo, progressBarType, serviceCardsType, testimonialType } from "@/helpers/typeStructure";
import React, { useState } from "react";
import ocean_freight from "@/app/images/ocean_freight.jpg"
import air_freight from "@/app/images/air_freight.jpg"
import land_freight from "@/app/images/land_freight.jpg"
import person1 from "@/app/images/person1.jpg"
import person2 from "@/app/images/person2.jpg"
import person3 from "@/app/images/person3.jpg"
import { Rating } from "@mui/material";
import LoadBar from "../../../components/LoadBar";


const Home:React.FC = () => {

  

  const firstInfo:firstInfo[] = [
    {
      icon: <Call className={styles.icon} />,
      title: 'CUSTOMER SERVICE',
      text: `Give us a free call \n +44 7765 853883`
    },
    {
      icon: <EventAvailable className={styles.icon} />,
      title: 'WORKING HOURS',
      text: 'Mon-Sat: 7AM-5PM Sunday: 9AM-3PM'
    },
    {
      icon: <NearMe className={styles.icon} />,
      title: 'OUR LOCATION',
      text: '300 Kansas Ave NW New Jersey, United States'
    },
    {
      icon: <Language className={styles.icon} />,
      title: 'GLOBAL OFFICE',
      text: 'London, UK'
    }
  ]

  const serviceCards:serviceCardsType[] = [
    {
      image: <Image className={styles.image} width={0} height={0} src={ocean_freight} alt=""/>,
      title: "Ocean Freight",
      text: "We demonstrated incomparable excellence to companies and individuals with special requirements. We are committed to providing efficient shipping and handling, ordering, pickup and on-time delivery; all together with constant support for our clientele."
    },
    {
      image: <Image className={styles.image} width={0} height={0} src={air_freight} alt=""/>,
      title: "Air Freight",
      text: "Need a one-stop solution for your international air freight and forwarding needs, whereas a faster, safer and cost effective way to ship and track your cargo by air to anywhere across the globe? Look no further than Universal Freight World Services."
    },
    {
      image: <Image className={styles.image} width={0} height={0} src={land_freight} alt=""/>,
      title: "Land Transport",
      text: "If you require a quality Road Freight Services ( Road Transport ) logistics provider that abides to your precise shipping needs with reliable, time reducing and cost effective results, then the services of Universal Freight World Services are right for you."
    },
  ]

  const testimonials:testimonialType[] = [
    {
      testimony: "“Crystal Royal Logistics offers cost effective shipping for my company and needs and they can get everything done on the same day”",
      testifier: "Eric A. Wheatley",
      image: <Image className={styles.image} width={0} height={0} src={person1} alt=""/>
    },
    {
      testimony: "“the team at Crystal Royal Group Logistics has been a pleasure to work with they show genuine interest in helping us with our busines needs and in helping our community by donating back to the community”.",
      testifier: "Camille J. Woods",
      image: <Image className={styles.image} width={0} height={0} src={person3} alt=""/>,
      rateValue: 4
    },
    {
      testimony: "“central courier has a wonderful team! they are excellent at keeping schedule and communicating about the delays with us. They are also responsive to special requests and also do make sure their customers are satisfied”.",
      testifier: "Robert K. Maestas",
      image: <Image className={styles.image} width={0} height={0} src={person2} alt=""/>,
      rateValue: 3
    }
  ]

  const progressBar:progressBarType[] = [
    {
      text: "REGION MARKET SHARE",
      percent: "90%"
    },
    {
      text: "REVENUE GROWTH PER YEAR",
      percent: "80%"
    },
    {
      text: "PROFIT GROWTH PER YEAR",
      percent: "75%"
    },
    {
      text: "NUMBER OF LOGISTICS CENTERS",
      percent: "90%"
    },
  ]


  return (
    <main className={styles.main}>
      {/* first container */}
      <div className={styles.landing_container}>
        <div>
          <h1>INDUSTRY LEADING LOGISTIC FIRM</h1>
          <h2>Fast and reliable same day courier services</h2>
          <div>
            <a href="/contact-us">Contact Us</a>
            <a href="">Discover More</a>
          </div>
        </div>
      </div>
      {/* small section with little info */}
      <div className={styles.info}>
        {
          firstInfo.map((info, index) => {
            return <div key={index} >
              {info.icon}
              <div>
                <h1>{info.title}</h1>
                <p>{info.text}</p>
              </div>
            </div>
          })
        }
        <div>
        </div>
      </div>

      <div className={styles.service}>
        <div className={styles.info_holder}>
          <h1>Our Services</h1>
          <p>Whether you need a package delivered across town 
            or 100 miles away, Crystal Royal Logistics offers a variety 
            of on-demand and scheduled services to meet your delivery needs. 
            Our uniformed drivers are radio dispatched and can be on their 
            way within minutes of your call. You can certainly depend on 
            us to deliver your package.
          </p>
        </div>
        <div className={styles.first_cards_container}>
          {
            serviceCards.map((card, index) => {
              return <div key={index}>
                {card.image}
                <h1>{card.title}</h1>
                <p>{card.text}</p>
              </div>
            })
          }
        </div>
      </div>
      <div className={styles.progressSect}>

        <div>
            {
              progressBar.map((data, index) => (
                <div key={index} className={styles.sect}>
                  <div>
                    <p>{data.text}</p>
                    <p>{data.percent}</p>
                  </div>
                  <div className={styles.loadBar}>
                    <div style={{width: data.percent}} className={styles.loader}></div>
                  </div>
                </div>
              ))
            }
        </div>

        <div>
          <h1>Our Year In Numbers</h1>
          <p>How we have developed, and expanded over the years.</p>
        </div>

      </div>
      <div className={styles.testimonial}>
        <div>
          {
            testimonials.map((data, index) => (
              index == 0?
          <div key={index} className={styles.firstCard}>
            <h3>Our Testimonial</h3>
            <h1>What customers say about us</h1>
            <p>{data.testimony}</p>
            <b>{data.testifier}</b>
            <div className={styles.image_container}>
              {data.image}
            </div>
          </div>:
          <div key={index} className={styles.otherCard}>
            <FormatQuoteRounded className={styles.icon}/>
            <p>{data.testimony}</p>
            <Rating
              name="text-feedback"
              value={data.rateValue}
              readOnly
              precision={0.5}
              emptyIcon={<StarRate style={{ opacity: 0.55 }} fontSize="inherit" />}
            /><br/>
            <b>{data.testifier}</b>
            <div className={styles.image_container}>
              {data.image}
            </div>
            
          </div>
            ))
          }

        </div>
        </div>
    </main>
  );
}


export default Home;