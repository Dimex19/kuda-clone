const StoreButton = ({keys,Logo, text, text2, width, link})=> {
    return (
        <>
            <a href={link} target="_blank">
                <div className={`btn ${keys}`}style={{width: width}}>
                    <div id="AppleLogo">
                        {Logo}
                    </div>
                    <p>{text} <br /><span>{text2}</span></p>
                </div>
            </a>    
        </>
    )
}
export default StoreButton