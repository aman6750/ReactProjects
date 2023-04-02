import logo from './logo.svg';
import './App.css';


let data = [
  {
    name:'Masai',
    location:'Banglore'
  },
  {
    name:'School',
    location:'pune'
  },
  {
    name:'aman',
    location:'lucknow'
  },
  {
    name:'preeti',
    location:'kashmir'
  }
]


const Item = ({data}) => {

  <li>
    <div>{data.name}</div>
    <div>{data.location}</div>
  </li>

}

let style1={
  fontSize:'30px',
  background:'gray'
}

let style2={
  borderRadius:20,
  background:'teal'
}


function App() {
  return (
   <>

    <div className="one">
      <button style={style1}> ONE </button>
    </div>

    <div className="two">
    <button style={{fontSize:'100px',background:'cyan'}}> TWO </button>
    </div>

    <div className="three">
      <button style={{...style1,...style2}}> THREE </button>
    </div>

    <div className="four">
      <button> FOUR </button>
    </div>

    <div className="five">
    <button className='class1 class2'> FIVE </button>
    </div>

   </>
  );
}

export default App;
