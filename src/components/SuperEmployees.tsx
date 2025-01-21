import {useEffect, useState} from 'react';
import axios from 'axios';


interface Employee {
    empid: number;
    name: string;
    age: number;
    email: string;
    address: string;
    status: number;
}
function SuperEmployees() {

    const [employees, setEmployees] = useState<Employee[]>([]);

   useEffect(() => {
        axios.get('http://localhost:4500/employee')
        .then((response: { data: any; }) => {setEmployees(response.data)})
   },[])

   const addEmployee: any = () => {
    setEmployees([...employees, {empid: 12, name: 'TestAddedd', age: 0, email: 'testadded@testmail.com', address: 'zdsdffdsdf', status: 1}]);
   }
  return (
    <div>
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp)=>{
                    return(
                        <tr>
                    <th>{emp.empid}</th>
                    <th>{emp.name}</th>
                    <th>{emp.age}</th>
                    <th>{emp.email}</th>
                    <th>{emp.address}</th>
                    <th>{emp.status}</th>
                </tr>
                    )
                })}
            </tbody>
            </table>
            <button className='btn btn-primary' onClick={addEmployee}>Add Employee</button>
    </div>
)
}

export default SuperEmployees