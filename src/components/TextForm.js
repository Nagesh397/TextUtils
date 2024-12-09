import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked " + text)
    let newText = text.toLocaleUpperCase()
    setText(newText);
    props.showAlert("Converted to Uppercase! ", "success")
    
  }
  const handleLoClick = () =>{
    let newText = text.toLocaleLowerCase()
    setText(newText);
    props.showAlert("Converted to Lowercase! ", "success")
  }
  const handleOnChange = (event) =>{
    // console.log("On Change")
    setText(event.target.value)
  }
  const handleArrayClick = () =>{
    let newText = text.split(" "); // Convert the string into an array of words
    console.log(newText); // Logs the array for debugging
    setText(newText.join()); // Sets the state to the new array
  }
  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style = {{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleArrayClick} >Convert ro Array</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
    </div>
    <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} Minutes for read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
