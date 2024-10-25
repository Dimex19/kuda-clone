const StoreButton = ({keys,Logo, text, text2, width})=> {
    return (
        <>
            <div className={`btn ${keys}`}style={{width: width}}>
                <div id="AppleLogo">
                    {Logo}
                </div>
                <p>{text} <br /><span>{text2}</span></p>
            </div>        
        </>
    )
}
export default StoreButton