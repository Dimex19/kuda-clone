import { FaAngleRight } from "react-icons/fa6";
import Image from '../assets/image/section-two.png'
import styled from "styled-components"
import Texts from './Texts'

const Template = ({texts})=> {
    return (
        <>
            <Wrapper>
                <TextTemplate className="text"> 
                    {texts}
                </TextTemplate> 
            </Wrapper>
        </>
        
    )
}
export default Template

const Wrapper = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    margin-top: 200px; */
    /* margin-bottom: 200px; */
`
const TextTemplate = styled.div`

    h1 {
        max-width: 230px;
        color: #40196d;
        margin-bottom: 25px;
        font-weight: 800;
    }
    #para {
        font-size: 12px;
        max-width: 300px;
        margin-bottom: 25px;
    }
    a {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #40196d;
        font-weight: 700;
    }
    @media (max-width: 800px) {
        margin-bottom: 40px;
        margin-top: 40px;
        text-align: center;

        h1 {
            text-align: center;
        }
        a {
            text-align: center;
        }
    }
    @media (max-width: 450px) {
        margin-bottom: 40px;
        margin-top: 40px;
        /* text-align: center; */
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            text-align: center;
        }
        a {
            text-align: center;
            /* border: 1px solid blue; */
        }
    }
`
// const ImageTemplate = styled.div``