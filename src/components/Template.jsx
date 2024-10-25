import { FaAngleRight } from "react-icons/fa6";
import Image from '../assets/image/section-two.png'
import styled from "styled-components"
import Texts from './Texts'

const Template = ({texts,image})=> {
    return (
        <>
            <Wrapper>
                <TextTemplate>
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
`
const ImageTemplate = styled.div``