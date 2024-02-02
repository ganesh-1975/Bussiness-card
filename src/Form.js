
function Form(props){
    let {toggle, user, update} = props;

    const toggleTo = () => {
        window.localStorage.setItem("USER_info", JSON.stringify(user) )
        toggle()
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        update(olddata => {
            return {...olddata, [name] : value}
        })
    }


    return <>

    <form className="formStyle">
    <h2>Edit the details for Bussiness Card</h2>

        <label> Name : 
            <input type="text" name="name" value={user.name} onChange={handleChange}/>
        </label> <br/>

        <label> Designation : 
            <input type="text" name="designation" value={user.designation} onChange={handleChange}/>

        </label> <br/>

        <label> Address : 
        <input type="text" name="address" value={user.address} onChange={handleChange}/>
            
        </label> <br/>

        <label> Pincode : 
        <input type="text" name="pincode" value={user.pincode} onChange={handleChange}/>
            
        </label> <br/>

        <label> Phone : 
        <input type="text" name="phone" value={user.phone} onChange={handleChange}/>
           
        </label> <br/>

        <label>  Website: 
        <input type="text" name="website" value={user.website} onChange={handleChange}/>
           
        </label> <br/>

        <label> Email : 
        <input type="text" name="email" value={user.email} onChange={handleChange}/>
           
        </label> <br/>

    </form>
        <button onClick={toggleTo} className="btn">Submit</button>
    </>
}

export default Form