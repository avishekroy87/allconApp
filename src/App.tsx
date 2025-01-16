import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import usePrevious from './hooks/usePrevious';
import './App.css'
import Users from './components/Users';
import ThemeChild from './components/ThemeChild';
import { ThemeContext } from './ThemeContext';
import Employess from './components/Employess';
import SampleUse from './components/SampleUse';
import SuperEmployees from './components/SuperEmployees';



function App() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const resume = useRef<HTMLInputElement>(null);
  const coverletter = useRef<HTMLTextAreaElement>(null);

  const [response, setResponse] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);
  const customehook = usePrevious(data);
  console.log('Previous data:', customehook);
  useEffect(() => {
    // console.log('App mounted');
    jsonPlaceholder();
    
  },[]);

  const jsonPlaceholder = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    });
  }
  
  const formApicall = async (formData: FormData) => {
    fetch('https://reqres.in/api/users', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    })
   .then(response => response.json())
    .then(data => {
      console.log(data);
      setResponse(data);
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', name.current?.value || '');
    formData.append('email', email.current?.value || '');
    formData.append('phone', phone.current?.value || '');
    formData.append('resume', resume.current?.files?.[0] || '');
    formData.append('coverletter', coverletter.current?.value || '');
    
    formApicall(formData);
    
  }

const [theme, setTheme] = useState('light');
  
  return (
    <>
      <div className={`App `+ theme}>
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
      <p>&nbsp;==========================</p>
      {data.map(user => (
        <Users key={user.id} user={user} />
      ))}
      <ThemeContext.Provider value={{theme , setTheme}}>
        <ThemeChild />
      </ThemeContext.Provider>
      <p>&nbsp;==========================</p>
      <Employess />
      <p>&nbsp;==========================</p>
      <SampleUse />
      <p>&nbsp;==========================</p>
      <SuperEmployees />
    </>
  )
}

export default App
