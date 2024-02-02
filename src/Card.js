
function Card(props){
    let {toggle, user} = props;

    const toggleTo = () => {
        toggle()
    }

    

    return <>
    
    <div className="bussiCard">
        <div className="styleCard">
            <h1>{user.name}</h1>
            <p>{user.designation}</p>

            <hr></hr>
            <div className="personalDetails">
                <p> {user.address} </p>
                <p> {user.pincode} </p>
                <p> {user.phone} </p>
                <p> {user.email} </p>
                <p> {user.website} </p>
            </div>
        </div>
    </div>

    <button onClick={toggleTo} className="btn">Edit</button>
    
    </>
}

export default Card