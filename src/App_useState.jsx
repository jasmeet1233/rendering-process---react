import React, {useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    console.log('App render');
    
    return (
        <div>
            <button onClick={() => setCount(count => count+1)}>Inc count - {count}</button>
            <button onClick={() => setCount(count => count-1)}>Inc count - {count}</button>
            <button onClick={() => setCount(0)}>Inc count - {count}</button>
        </div>
    )
}

export default App;
