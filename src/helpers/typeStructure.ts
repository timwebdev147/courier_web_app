import React, { Key, MouseEventHandler } from "react";

export interface linkTypes {
    title: string | any,
    link: string,
    icon?: React.JSX.Element,

}

export interface firstInfo {
    icon: React.JSX.Element,
    title: string,
    text: string 
}

export interface serviceCardsType{
    image: React.JSX.Element,
    title: string,
    text: string
}

export interface testimonialType{
    image: React.JSX.Element,
    testimony: string,
    testifier: string,
    rateValue?: number
}

export interface progressBarType{
    text: string,
    percent: string
}