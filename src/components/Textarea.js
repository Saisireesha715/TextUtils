// import React, { useState } from 'react'


// const Textarea = (props) => {

//   const [text,setText] = useState("");
 
// //   setText=() =>{
    
// //   }

// const mystyle ={
//   backgroundColor : props.mode === 'dark' ? 'black' : 'pink', 
//     color : props.mode === 'dark'?'white':'black'

// }

// const textstyle={
//   color : props.mode === 'dark' ? 'white' : 'black' 
// }

// const hanleOnchange = (event)=>{
//   setText(event.target.value)
 
// }

// const handleToggleClick=()=>{
//     let n = text.split('').map(char=>{
//         if(char === char.toLowerCase()){
//             return char.toUpperCase();
//         }
//         else{
//             return char.toLowerCase();
//         }
//     }).join('');
   
//     setText(n);

//     props.showAlert('text converted to toggle case','success');
//     setTimeout(() => {
//      props.showAlert(null)
//     }, 3000);
// }

//   const handleUpClick = () =>{
//      console.log(text)
//     //  let n =  text.toUpperCase();
//     //  setText(n)
//     setText(text.toUpperCase());

//     props.showAlert('text converted to Uppercase','success');
//     setTimeout(() => {
//       props.showAlert(null);
//     }, 3000);
    
//   }



//   const handleLowClick =() =>{
//      setText(text.toLowerCase())

//      props.showAlert('text converted to lower case','success');
//      setTimeout(() => {
//       props.showAlert(null)
//      }, 3000);
//   }
//   return (
//     <>
//     <div className='container' style={{color : props.mode === 'dark'?'white':'black' }}>   
//     <h1 > {props.heading}</h1>

//   <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"value={text} onChange={hanleOnchange}  style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark'?'white':'black'}}></textarea>
   

// </div>

// <div className='container my-3' >
// <button type="button" className="btn btn-primary my-3 " onClick={handleUpClick}style ={mystyle} >Convert to Uppercase</button>
// <button type="button" className="btn btn-primary my-3 mx-2 " onClick={handleLowClick}style ={mystyle}>Convert to Lowercase</button>
// <button type="button" className="btn btn-primary my-3 mx-2 " onClick={handleToggleClick} style ={mystyle}>Toggle Case</button>
// </div>
// <h3 style={textstyle}>Text Summary</h3>
// <p style={textstyle}>characters: {text.length}   words: {text.split(" ").length-1}</p>
// <p style={textstyle}>No.of minutes: {(text.split(" ").length-1)  * 0.008}</p>


// <h3 style={textstyle}>Preview</h3>
// <p style={textstyle}>{text}</p>
//     </>


//   )
// }

// export default Textarea



import React, { useState } from 'react';

const Textarea = (props) => {
  const [text, setText] = useState("");

  const mystyle = {
    backgroundColor: props.mode === 'dark' ? 'black' : 'pink',
    color: props.mode === 'dark' ? 'white' : 'black'
  };

  const textstyle = {
    color: props.mode === 'dark' ? 'white' : 'black'
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleToggleClick = () => {
    let n = text.split('').map(char => {
      return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }).join('');

    setText(n);

    props.showAlert('Text converted to toggle case', 'success');
    setTimeout(() => {
      props.showAlert(null);
    }, 3000);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());

    props.showAlert('Text converted to Uppercase', 'success');
    setTimeout(() => {
      props.showAlert(null);
    }, 3000);
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());

    props.showAlert('Text converted to Lowercase', 'success');
    setTimeout(() => {
      props.showAlert(null);
    }, 3000);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      props.showAlert('Text copied to clipboard', 'success');
    }).catch(() => {
      props.showAlert('Failed to copy text', 'danger');
    });
  };

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}
        ></textarea>
      </div>

      <div className='container my-3'>
        <button type="button" className="btn btn-primary my-3" onClick={handleUpClick} style={mystyle}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleLowClick} style={mystyle}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleToggleClick} style={mystyle}>Toggle Case</button>
        <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleCopyClick} style={mystyle}>Copy Text</button>
      </div>

      <div className='container'>
        <h3 style={textstyle}>Text Summary</h3>
        <p style={textstyle}>Characters: {text.length} Words: {text.split(" ").filter((word) => word.length !== 0).length}</p>
        <p style={textstyle}>Reading Time: {0.008 * text.split(" ").filter((word) => word.length !== 0).length} minutes</p>
        <h3 style={textstyle}>Preview</h3>
        <p style={textstyle}>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
};

export default Textarea;


