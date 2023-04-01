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


function App() {
  return (
   <>
    <div>
      <button> ONE </button>
    </div>
    <div>
    <button> TWO </button>
    </div>
  <div>
  <button> THREE </button>
</div>
<div>
      <button> FOUR </button>
    </div>
    <div>
    <button> FIVE </button>
  </div>
   </>
  );
}

export default App;
