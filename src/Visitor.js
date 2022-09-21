import { useState, useEffect} from "react";
import {View} from "./components/View";



const Visitor = () => {
    const [visitors, setVisitors] = useState([getDataFromLocalStorage()]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [purpose, setPurpose] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let visitor = {
            lastName,
            firstName,
            purpose,
            date
        }
        setVisitors ([...visitors, visitor]);
        setFirstName('');
        setLastName('');
        setPurpose('');
        setDate('');
    }
    const deleteVisitor = (firstName) => {
        const filteredVisitors = visitors.filter((element, index)=>{
            return element.firstName !== firstName
        })
        setVisitors(filteredVisitors);
    }

    useEffect(()=>{
        localStorage.setItem('visitors', JSON.stringify(visitors));
    }, [visitors])

    return (
        <div className="wrapper">
            <div className="main">
                <div className="container">
                    <div className="header">
                        <h1>Visitor Entry</h1>
                    </div>
                    <form className="form-group" onSubmit={handleSubmit}>
                        <label> First Name </label>
                        <input type="text" className="form-control" required onChange={(e) => setFirstName(e.target.value)} value = {firstName}/>
                        <label>Last Name </label>
                        <input type="text" className="form-control" required onChange={(e) => setLastName(e.target.value)} value = {lastName}/>
                        <label> Purpose of Visit </label>
                        <input type="text" className="form-control" required onChange={(e) => setPurpose(e.target.value)} value = {purpose}/>
                        <label> Date</label>
                        <input type="date" className="form-control" required onChange={(e) => setDate(e.target.value)} value = {date}/>

                        <button type="submit" className="btn btn-secondary btn-md">Submit</button>
                    </form>
                </div>
                <div className="view-container">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th> Name </th>
                                    <th> Purpose of Visit </th>
                                    <th> Date </th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <View visitors = {visitors} deleteVisitor = {deleteVisitor} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
   }

    const getDataFromLocalStorage = () => {
        const data = localStorage.getItem('visitors');
        if (data) {
            return JSON.parse(data);
        }
            else {
               return []
            
        }

     
    }

  
export default Visitor;