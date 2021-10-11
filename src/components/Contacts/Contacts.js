import React from 'react'
import { useSelector } from 'react-redux'
import Contact from './Contact';

const Contacts = () => {
    const contacts = useSelector(state => state.contacts)
    console.log(contacts);
    return (
        <>
            <table className="table container">
                <thead style={{ backgroundColor: "#DC143C", color: "white" }}>
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <label htmlFor="" className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {contacts.map(contact => (
                        <Contact contact={contact} />
                    ))}


                </tbody>
            </table>
        </>
    )
}

export default Contacts
