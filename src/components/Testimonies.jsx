import React from 'react'
import styled from 'styled-components'
const Testimonies = ({paragraph, image, name}) => {
  return (
    <>
        <Container>
            <p>{paragraph}</p>
            <Profile>
                <img src={image} alt="" />
                <h6>{name}</h6>
            </Profile>
        </Container>
        
    </>
)
}

export default Testimonies

const Container = styled.div`
    max-width: 350px;
`
    

const Profile = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
`