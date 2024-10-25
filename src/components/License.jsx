const License = ({id,text, image})=> {
    return (
        <>
            <div className={id}>
                <p>{text}</p>
                <img src={image} alt="" />
            </div>
        </>
    )
}
export default License