import { FaAngleRight } from "react-icons/fa6";


const Texts = ({header,para,link,arrow})=> {
    return (
        <>
            <h1>{header}</h1>
            <p id="para">{para}</p>
            <a href=""><p>{link} <span>{arrow}</span></p></a>
        </>
    )
}
export default Texts