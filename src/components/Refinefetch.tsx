import React from 'react'

type Props = {}

function Refinefetch({}: Props) {
  const [data, setData] = React.useState<any[]>([]);

  const query = `
    query Query {
  country(code: "BR") {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}

  `;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://countries.trevorblades.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const json = await response.json();
      console.log('graphql', json);
      setData(json);
    };
    fetchData();
  }, []);

  return (
   <>
    <div>
      <h1>Refinefetch</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
   </>
  )
}

export default Refinefetch