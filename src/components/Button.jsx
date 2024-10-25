const Button = ({width, height, color, bgcolor, text})=> {
    return (
        <>
            <button style={{border: "none", borderRadius: "10px", fontWeight:"500", backgroundColor: bgcolor, color: color, width:width, height:height}}><p>{text}</p></button>
        </>
    )
}
export default Button