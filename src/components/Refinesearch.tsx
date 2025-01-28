import React from 'react'

type Props = {}

const Items = ['phone', 'email', 'name', 'resume', 'coverletter'];

function Refinesearch({}: Props) {
    const [keyword, setKeyword] = React.useState<string>('');

const fileteredResult = React.useMemo(() => {
    return Items.filter(itemuser => itemuser.toLowerCase().includes(keyword.toLowerCase()));
  }, [Items, keyword]);


    const handleKeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setKeyword(event.currentTarget.value);
    }

  return (
    <div>
        <label>Refinesearch</label>
        <input type="text" placeholder="Filter" onKeyUp={handleKeyup}/>
        <ul>
            {fileteredResult.map((itemuser, index) => (
                <li key={index}>{itemuser}</li>
            ))}
        </ul>
    </div>
  )
}

export default Refinesearch