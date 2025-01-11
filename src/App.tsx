import { useState, useRef, useEffect } from 'react'
import './App.css'
import Users from './components/Users';

// interface IDUser {
//   userID: number;
//   name: string;
//   email: string;
// }

function App() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const resume = useRef<HTMLInputElement>(null);
  const coverletter = useRef<HTMLTextAreaElement>(null);

  const [response, setResponse] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    console.log('App mounted');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    });
  },[data]);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', name.current?.value || '');
    formData.append('email', email.current?.value || '');
    formData.append('phone', phone.current?.value || '');
    formData.append('resume', resume.current?.files?.[0] || '');
    formData.append('coverletter', coverletter.current?.value || '');
    
    fetch('https://reqres.in/api/users', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    // .then(response => response.json())
    .then(data => {
      console.log(data);
      setResponse(data);
    });
    // .catch(error => {
    //   console.error(error);
    // });
  }


  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Submit your Application</h1>
        </header>
        <div className="App-body">
          {response && ( <h3>{response}</h3> )}
          <form onSubmit={handleSubmit}> 
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" ref={name} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" ref={email} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" ref={phone} />
            </div>
            <div className="form-group">
              <label htmlFor="resume">Resume</label>
              <input type="file" ref={resume} />
            </div>
            <div className="form-group">
              <label htmlFor="cover-letter">Cover Letter</label>
              <textarea id="cover-letter" ref={coverletter} />
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {data.map(user => (
        <Users key={user.id} user={user} />
      ))}
    </>
  )
}

export default App
