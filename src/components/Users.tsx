
interface User {
  id: number;
  name: string;
  email: string;
}

function Users({user}: {user: User}) {
  const {id, name, email} = user;
  return (
    <div>
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default Users
