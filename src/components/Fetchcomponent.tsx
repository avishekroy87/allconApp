import React from 'react'

const URL = 'https://api.restful-api.dev';

interface Gadgets{
  id: string;
  name: string;
}
function Fetchcomponent() {
  const [gadgets, setGadgets] = React.useState<Gadgets[]>([]);
  const [isloading, setIsloading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchGadgets = async () => {
      const response = await fetch(`${ URL }/objects`);
      const data = await response.json();
      setGadgets(data);
      setIsloading(false);
    }

    fetchGadgets();
  },[]);

  if(isloading)
    return <div>Loading...</div>

  return (
    <div>
      <h1>Gadgets</h1>
      {isloading && <div>Loading...</div>}
      <ul>
        {gadgets.map((gadget) => (
          <li key={gadget.id}>{gadget.name}</li>
        ))}
      </ul>
    
      
    </div>
  )
}

export default Fetchcomponent
