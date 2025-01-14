import {useState} from 'react'

function Employess() {
    const[employees, setEmployees] = useState<any[]>(
        [
            {id:1 , name: 'user1'},
            {id:2 , name: 'user2'},
            {id:3 , name: 'user3'}]
        );

        function getRandomInt(max:number) {
            return Math.floor(Math.random() * max);
          }
        const handleAddemployee = () => {
            setEmployees([...employees, {id: getRandomInt(10), name: 'user'+getRandomInt(10)}]);
        }
  return (
    <div>
      <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
        </tr>
       {employees.map(emp=>{
              return(
                <tr>
                     <td>{emp.id}</td>
                     <td>{emp.name}</td>
                </tr>
              )
       })}
      </table>
      <button onClick={handleAddemployee}>Add Employee</button>
    </div>
  )
}

export default Employess
