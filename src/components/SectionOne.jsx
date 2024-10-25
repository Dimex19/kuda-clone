import styled from "styled-components"
import ServiceCard from "./ServiceCard"
import { HiMiniCreditCard } from "react-icons/hi2";
import { BiSolidPieChart } from "react-icons/bi";
import { GiOrganigram } from "react-icons/gi";
import { BsFillSendCheckFill } from "react-icons/bs";
import { FaBomb } from "react-icons/fa6";


const SectionOne = ()=> {
    return (
        <>
            <Container>
                {/* <h1>This is Section One</h1> */}
                <CardsRowOne>
                    <ServiceCard text="Order a Kuda card on the app with pickup and delivery options." image={<HiMiniCreditCard/>}/>
                    <ServiceCard text="Enjoy cashless payment options online and offline." image={<BiSolidPieChart />}/>
                    <ServiceCard text="Pay your essential bills and buy gift cards easily." image={<GiOrganigram />}/>
                </CardsRowOne>
                <CardsRowTwo>
                    <ServiceCard text="Get 25 free transfers to Nigerian banks every month." image={<BsFillSendCheckFill />}/>
                    <ServiceCard text="Save money automatically any time you spend." image={<FaBomb />}/>
                </CardsRowTwo>
            </Container>
            
        </>
    )
}
export default SectionOne

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 70%;
    
    /* border: 1px solid red; */
    justify-content: space-between;
`
const CardsRowOne = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 50px;`
const CardsRowTwo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 583px;
    margin-right: auto;
    margin-left: auto;
    /* border: 1px solid red; */
`
