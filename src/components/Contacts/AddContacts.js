import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const AddContacts = () => {


    const [name, setName] = useState("")
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit =(e)=> {

         e.preventDefault();
    }
    return (
        <div className="card border-0 shadow container">
            <div className="card-header">
                Add a Contact
            </div>
            <div className="card-body">
                <form onSubmit={e=>handleSubmit(e)} >
                    <div className="form-group">
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e=> setName(e.target.value))}
                         />

                    </div>
                    <div className="form-group py-2 ">
                        <input type="number" 
                        className="form-control " 
                        placeholder="Enter your phone number" 
                        value={phone}
                        onChange={(e=> setPhone(e.target.value))} />

                    </div>
                    <div className="form-group pb-2">
                        <input type="email" 
                        className="form-control" 
                        placeholder="Enter your Email" 
                        value={email}
                        onChange={(e=> setEmail(e.target.value))}
                        />
                    </div>

                    <div className="d-flex justify-content-center align-items-center place-items-center"><button className="btn btn-primary ">Create Contact</button></div>
                    
                </form>
            </div>
        </div>
    )
}

export default AddContacts
