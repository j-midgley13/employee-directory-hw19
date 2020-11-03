
import React from "react";

function Table(props){
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">Cell</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map( (employee, index) => (
                    <tr>
                        <td><img src={employee.picture.thumbnail} alt="employee"></img></td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.dob.age}</td>
                        <td>{employee.cell} </td>
                        <td>{employee.email}</td>
                    </tr>
                    ))} 
            </tbody>
        </table>
    )
} 

export default Table;