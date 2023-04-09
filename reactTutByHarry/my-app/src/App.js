import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';


function App() { 
  return (
    <>
     <Navbar title="TextUtils" />
     <div className='container my-3'  >
     {/* <TextForm heading = "Analyze the below text" /> */}
     <About/>
     </div>      
    </>    
  );
}

export default App;
