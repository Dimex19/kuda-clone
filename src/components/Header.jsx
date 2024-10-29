import styled from "styled-components"
import KudaLogo from '../assets/image/kuda-logo.png'
import NigeriaFlag from '../assets/icons/flag-of-nigeria.svg'
import Button from "./Button"
import { IoReorderTwoOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";



const Header = ()=> {

    const OpenPopUp = ()=>{
        // alert('Hello Adeola')
        const popup = document.getElementsByClassName('popup')
        popup[0].style.display = 'block'
        // console.log(popup);
        
    }
    const ClosePopUp = ()=> {
        const popup = document.getElementsByClassName('popup')
        popup[0].style.display = 'none'
    }

    return (
        <Wrapper>
            <PopUpWrapper>
                <PopUp className="popup">
                    <PopUpNav>
                        <img src={KudaLogo} alt="" />
                        <IoMdClose id="popUpClose" onClick={ClosePopUp}/>
                    </PopUpNav>
                    <PopUpBtn>
                        <Button width="120px" height="40px" color="#fff" bgcolor="#40196d" text="Join Kuda"  />
                        <Button width="120px" height="40px" color="#40196d" bgcolor="#eff1ff" text="Sign In"/>
                    </PopUpBtn>
                </PopUp>
            </PopUpWrapper>

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
                        <IoReorderTwoOutline onClick={OpenPopUp}/>
                    </SideBar>
                    

                </NavRight>
                
            </MainContainer>
            
        </Wrapper>
    )
}
export default Header

const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    /* margin-left: 70px; */
    background-color: #fff;
    /* border: 1px solid red; */
`
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    align-items: center;
    // border: 1px solid red;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 60px;
    padding-left: 50px;
    padding-right: 50px;
    @media (max-width: 800px) {
            padding-left: 20px;
            padding-right: 20px;
            /* border: 1px solid red; */

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
const PopUpWrapper = styled.div`
    position: fixed;
`
const PopUp = styled.div`
    display: none;
    position: absolute;
    background-color: #fff;
    margin-left: 0px;
    width: 100vw;
    height: 100vh;
    margin-top: 0px;
    /* border: 1px solid red; */
    /* padding-right: 20px; */

    img {
        width: 75px;
        height: 40px;
    }   
`
const PopUpNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
    margin: 10px 20px;

    #popUpClose {
        font-size: 28px;
        color: #40196D;
    }
    
`
const PopUpBtn = styled.div`
    margin: 20px 20px ;
    Button {
        cursor: pointer;
        margin-right: 20px;
    }
`