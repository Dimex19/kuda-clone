import styled from "styled-components"

// import Image1 from ''
const ServiceCard = ({image,text})=> {

    return (
        <>
            <Cards>
                <div id="profile">{image}</div>
                <h5>{text}</h5>
            </Cards>
        </>
    )
}
export default ServiceCard

const Cards = styled.div`
    width: 280px;
    padding: 20px;
    color: #40196d;
    /* border: 1px solid red; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    #profile {
        background-color: rgb(223, 227, 255);
        width: auto;
        height: auto;
        border-radius: 19px;
        font-size: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        /* border: 1px solid red; */
    }
    @media (max-width: 450px) {
        padding: 10px;
        /* border: 1px solid red; */
        
        #profile {
            width: 50px;
            height: 35px;
            /* margin-right: 50px; */
        }
    }
    @media (max-width: 800px) {
        display: flex;
        width: 100%;
        margin-bottom: 20px;
        align-items: center;
        #profile {
            margin-right: 20px;
            margin-top: auto;
            margin-bottom: auto;
        }
    }
`