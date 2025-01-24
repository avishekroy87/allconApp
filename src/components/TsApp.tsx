
interface Student {

  id: number;

  name: string;

}



const TsApp = ({ student }: { student: Student }) => {

  return (

    <div>

      <h1>TsApp Component</h1>

      <p>ID: {student.id}</p>

      <p>Name: {student.name}</p>

    </div>

  );

};



export default TsApp;
