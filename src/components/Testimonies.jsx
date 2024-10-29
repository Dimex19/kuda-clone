import React from 'react'
import styled from 'styled-components'
const Testimonies = ({paragraph, image, name}) => {
  return (
    <>
        <CardContainer>
            <p>{paragraph}</p>
            <Profile>
                <img src={image} alt="" />
                <h6>{name}</h6>
            </Profile>
        </CardContainer>
        
    </>
)
}

export default Testimonies

const CardContainer = styled.div`
    width: 350px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid red; */
    margin-right: 20px;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

`
    

const Profile = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
`