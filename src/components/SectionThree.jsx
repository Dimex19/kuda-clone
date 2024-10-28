import React from 'react'
import styled from 'styled-components'
import Testimonies from './Testimonies'
import FirstImage from "../assets/react.svg"
const SectionThree = () => {
  return (
    <Wrapper>
        <h1>Don’t just take our word for it</h1>
        <Container>
            <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
            <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
            <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
            <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
            <Testimonies paragraph="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah" image={FirstImage} name="Eremiye Damilare"/>
    </Container>
    </Wrapper>
    
  )
}

export default SectionThree
const Wrapper = styled.div`
    h1 {
        text-align: center;
        color: #40196d;
        font-weight: 800;
    }
`

const Container = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    margin-top: 50px;
    margin-bottom: 50px;
    animation-name: example;
  

    p {
        font-size: 12px;
    }
`