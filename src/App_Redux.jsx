import { getdata } from './store/reducer';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state);
  console.log('App render')


  return (
    <div className="App">
      <button onClick={() => dispatch({type: 'increment'})}>Increase Count - {count}</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrease Count - {count}</button>
      <button onClick={() => dispatch({type: 'reset'})}> same Count - {count}</button>
      <button onClick={() => dispatch(getdata('jasmeet'))}>get data</button>
    </div>
  )
}

export default App
