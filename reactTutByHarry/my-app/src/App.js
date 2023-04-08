import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() { 
  return (
    <>
     <Navbar title="TextUtils" />
     <div className='container my-3'  >
     <TextForm heading = "Analyze the below text" />
     </div>      
    </>    
  );
}

export default App;
