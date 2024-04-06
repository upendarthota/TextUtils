import React,{useState} from 'react'

export default function TeForm(props) {
  const [text,setText]=useState('')
//text="new text" //wrong way to change the state
//settext("new text) correct way to change the state


const handleUpClick=()=>{
//console.log("Uppercase was clicked"+text)
let newText=text.toUpperCase();
setText(newText)
props.showAlert("Converted to Uppercase","success")

}
const handleLoClick=()=>{
  //console.log("Uppercase was clicked"+text)
  let newText=text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to Lowercase","success")
  
  }
  const handleclearClick=()=>{
    //console.log("Uppercase was clicked"+text)
    let newText=''
    setText(newText)
    props.showAlert("Cleared the data","success")
    
    }

const handleOnChange=(event)=>{
  //console.log("on change")
  setText(event.target.value)
}

const handleCopy=()=>{
  var copied=document.getElementById('myBo')
  copied.select()
  navigator.clipboard.writeText(copied)
  // document.getSelection().removeAllRanges()

  props.showAlert("Copied the data to clipboard ","success")
}

const handleSpace=()=>{
var newText=text.split(/[ ]+/);
setText(newText.join(" "))
props.showAlert("Adjusted the space","success")

}


  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
     <h2 className='my-4'>{props.heading}</h2>
    <div class="mb-3 my-4">
       
     <textarea class="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBo" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick} >Reset</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpace} >Remove Extra space</button>

</div>

<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>Your Text Summary here</h1>
<p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters are there.</p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview ........................"}</p>


</div>

</>
  )
}
