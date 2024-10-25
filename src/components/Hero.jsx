import React from 'react'
import styled from "styled-components"
import HeroImg from '../assets/image/hero.png'
import Button from './Button'
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import StoreButton from './StoreButton';
import CBN from '../assets/icons/cbn.png'
import NDIC from '../assets/icons/ndic.png'
import GooglePlay from '../assets/icons/playstore.svg'
import License from './License'

const Hero = () => {
  return (
    <>
        <HeroContainer>
            <HeroText>
                <h1>The money app for Africans.</h1>
                <p id='heroPara'>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                <div className="buttons">
                    <StoreButton keys="firstStrBtn" text="Download on the" text2="App Store" Logo={<IoLogoApple/>}/>

                    <StoreButton keys="SecondStrBtn" text="GET IT ON" text2="Google Play" Logo={<FaGooglePlay />} width="130px"/>
                </div>
                <div className="license">
                    <License id="license1" text="Fully Licensed by CBN" image={CBN}/>
                    <License id="license2" text="Deposits Insured by" image={NDIC}/> 
                </div>
            </HeroText>
            <HeroImage>
                <img src={HeroImg} alt="Hero image" />
            </HeroImage>
        </HeroContainer>
    </>
  )
}
export default Hero

const HeroContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
    max-width: 70%;
    min-height: calc(100vh - 60px);
    @media (max-width: 800px) {
            width: 100%;
            justify-content: center;
            min-height: 100%;
        }  
    /* border: 1px solid red; */`

const HeroText = styled.div`
    max-width: 320px;
    @media (max-width: 800px) {
        max-width: 400px;
        margin-top: 80px;
        /* border: 1px solid red; */
    }  
    h1 {
        color: #40196D;
        font-size: 38px;
        font-weight: 800;
        line-height: 40px;
        margin-bottom: 20px;

        @media (max-width: 800px) {
            text-align: center;
            font-size: 32px;
        }  
    }
    #heroPara {
        margin-bottom: 40px;
    }
    p {
        /* margin-bottom: 40px; */
        @media (max-width: 800px) {
            text-align: center;
            font-size: 18px;
            line-height: 24px;
        }  
    }
    .buttons {
        display: flex;
        @media (max-width: 800px) {
            /* margin-right: 50px;
            margin-left: auto; */
            justify-content: center;
        }
        /* margin-bottom: 30px; */
    }
    .firstStrBtn {
        margin-right: 10px;
    }
    .btn {
        display: flex;
        justify-content: center;
        height: 35px;
        border-radius: 5px;
        padding: 5px;
        #AppleLogo {
            font-size: 25px;
            margin-left: 0px;
            margin-right: 5px;
        }
        p {
            font-size: 8px;
            line-height: 12px;
        }
        span {
            font-size: 14px;
        }
        background-color: #000;
        color: #fff;
        width: 115px;
    }
    .license {
        display: flex; 
        margin-top:25px;
        /* justify-content: center; */
        /* border: 1px solid red; */
        @media (max-width: 800px) {
            margin-right: auto;
            margin-left: auto;
        }
        p{
        display: flex; 
        font-size: 10px;
        margin-right: 5px;
        opacity: 0.5;
        }
        .license1 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            /* border: 1px solid red; */
            /* height: 20px; */
            /* justify-content: center; */
            img {
                width: 22px;
                height: 18px;
            }
        }
        .license2 {
            display: flex;
            /* border: 1px solid red; */
            justify-content: center;
            align-items: center;
            img {
                width: 50px;
                height: 15px;
            }
        }
    }`

const HeroImage = styled.div`
    /* margin-left: auto;
    margin-right: auto; */
    img {
        /* height: 500px; */
        width: 400px;
    }
    @media (max-width: 800px) {
        margin-top: 50px;
    }
`
