import styled from "styled-components"
import KudaLogo from '../assets/image/kuda-logo.png'
import NigeriaFlag from '../assets/icons/flag-of-nigeria.svg'
import Button from "./Button"
import { IoReorderTwoOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";



const Header = ()=> {
    return (
        <>
            <MainContainer>
                <NavLeft>
                    <img src={KudaLogo} alt="" />
                    {/* <h1>Hello World</h1> */}
                    <NavLinks>
                        <div id="dropdown">
                            <p>Personal </p>
                            <IoMdArrowDropdown />

                        </div>
                        <div id="dropdown">
                            <p>Business</p>
                            <IoMdArrowDropdown />

                        </div>
                        <div id="dropdown">
                            <p>Company</p>
                            <IoMdArrowDropdown />

                        </div>
                        <div id="dropdown">
                            <p>Help</p>
                            <IoMdArrowDropdown />

                        </div>   
                    </NavLinks>
                </NavLeft>
                <NavRight>
                    <Button text="Sign In"  color="#40196D"  bgcolor="transparent"/>
                    <Button text="Join Kuda"  color="white" width="120px" height="40px"bgcolor="#40196D"/>
                    <div id="userLogo">
                        <img src={NigeriaFlag} alt="" style={{width:"30px", height:"30px"}}/>
                    </div>
                    <SideBar>
                        <IoReorderTwoOutline />
                    </SideBar>
                    

                </NavRight>
            </MainContainer>

        </>
    )
}
export default Header

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: blue;
    // border: 1px solid red;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 60px;
    padding-left: 50px;
    padding-right: 50px;
    /* position: fixed; */
    /* z-index: -1; */
    /* width: 100%; */
    @media (max-width: 800px) {
            padding-left: 20px;
            padding-right: 20px;
        }  
    `
const NavLeft = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 75px;
        height: 40px;
        // margin-left: 50px;
        margin-right: 70px;
        // height: 
    }`
const NavLinks = styled.div`
        display: flex;
        color: #40196D;

        p {
            margin-right: 5px;
            font-size: 12px;
            font-weight: 600;
        }
        #dropdown {
            display: flex;
            /* border: 1px solid red; */
            margin-right: 40px;
        }
        @media (max-width: 800px) {
            display: none;
        }  
        `
const NavRight = styled.div`
    display: flex;
    align-items: center;
    // margin-right: 50px;

    Button {
        cursor: pointer;
        margin-left: 40px;

        @media (max-width: 800px) {
            display: none;
        }  
    }

    #userLogo {
        width: 30px;
        height:30px;
        border-radius: 15px;
        background-color: #dcffec;
        margin-left: 40px;
        cursor: pointer;

        @media (max-width: 800px) {
            margin-right: 20px;
        }  

    }
    
`
const SideBar = styled.div`
    font-size: 30px;
    display: none;

    @media (max-width: 800px) {
            display: flex;
        }  
`