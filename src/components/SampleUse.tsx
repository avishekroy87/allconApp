import {useState, useEffect, Fragment} from 'react'

export default function SampleUse() {
    const [fullName, setFullName] = useState<string>('Tom');
    const [age, setAge] = useState<number>(25);

    useEffect(() => {
        console.log('useEffect called from Sample Use');
    },[age])
return (
    <Fragment>
    <div>Sample Component</div>
    <div>
        <h3>Full Name: {fullName}</h3>
        <h3>Age: {age}</h3>   

        <button onClick={() => setFullName('Jerry')}>name</button>
        <button onClick={() => setAge(10)}>age</button>

    </div>
    </Fragment>
  )
}
