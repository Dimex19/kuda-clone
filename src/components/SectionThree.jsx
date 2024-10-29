import React from 'react'
import styled from 'styled-components'
import Testimonies from './Testimonies'
import FirstImage from "../assets/react.svg"
import FF from '../assets/image/ff.svg'
import TC from '../assets/image/TC.svg'
import WEF from '../assets/image/wef.svg'
import CNBC from '../assets/image/cnbc.svg'
import BBC from '../assets/image/bbc.svg'
import EuroMoney from '../assets/image/euromoney.svg'
const SectionThree = () => {
  return (
    <Wrapper>
        <h1>Don’t just take our word for it</h1>
        <Container>
            <SubContainer>
                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>

                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
                <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
            </SubContainer>
        <BlogContainer>
            <img src={TC} alt="" />
            <img src={WEF} alt="" />
            <img src={FF} alt="" />
            <img src={BBC} alt="" style={{height:'40px', width:'150px'}}/>
            <img src={CNBC} alt="" style={{height:'60px'}}/>
            <img src={EuroMoney} alt="" style={{height:'50px', width:'150px'}}/>
        </BlogContainer>
    </Container>
    </Wrapper>
    
  )
}

export default SectionThree
const Wrapper = styled.div`
    margin-top: 100px;

    h1 {
        text-align: center;
        color: #40196d;
        font-weight: 800;
    }
`

const Container = styled.div`
    display: flex;
    max-width: 100vw;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 50px;
    overflow: hidden;
    /* white-space: nowrap; */

    @keyframes scroll {
        0% {transform: translateX(0)};
        100% {transform: translateX(-100%)}
    }
  

    p {
        font-size: 12px;
    }
`
const SubContainer = styled.div`
    display: inline-flex;
    animation: scroll 120s linear infinite;

`
const BlogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    margin-top: 100px;
    /* border: 1px solid red; */
    padding-left: 70px;
    padding-right: 70px;

    @media (max-width: 450px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    img {
        width: 100px;
        height: auto;
        color: #000;
        filter: grayscale(100%);
        margin-bottom: 40px;

        @media (max-width: 450px) {
            width: 90px;
        }
    }
`
