import { FaAngleRight } from "react-icons/fa6";


const Texts = ({header,para,link,arrow})=> {
    return (
        <>
            <h1>{header}</h1>
            <p id="para">{para}</p>
            <div id="linkArrow">
                <a href=""><p>{link} </p></a>
                <span>{arrow}</span>
            </div>
            
        </>
    )
}
export default Texts