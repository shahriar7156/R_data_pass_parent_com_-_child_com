
import './App.css';
import Child from './Components/Child';

function App() {
  const data="I am from parent"

  const handleChildData =(suptychildData) =>{
      console.log(suptychildData);

  }
  return (
    <div className="App">
      <Child data={data} onChildData={handleChildData}/>
    </div>
  );
}

export default App;
