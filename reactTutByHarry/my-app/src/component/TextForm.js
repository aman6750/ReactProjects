import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newtext =String(text).toUpperCase();
    setText(newtext);
  }

  const handleDownClick = ()=>{
    let newtext = String(text).toLowerCase();
    setText(newtext);
  }

  const onChangehandler = (text)=>{
       setText(text.target.value);
  }


    const[text,setText] = useState('enter text here');

  return (
   <>
  
   <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control"  value={text} onChange={onChangehandler} id="myBox" rows="8">       
          </textarea>
        </div>
         <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
         <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
    </div>

    <div className='container my-5'>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      {/* 1 word k liye it takes .0008 minutes so:
       */}

       <p>{.008* text.split(" ").length} Minutes read</p>
       <h3>preview</h3>
       <p>{text}</p>
    </div>

    </>
  )
}
