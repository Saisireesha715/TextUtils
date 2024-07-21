// import React, { useState } from 'react'

// export default function About(props) {


//   const mystyle ={
//     backgroundColor : props.mode === 'dark' ? 'black' : 'white', 
//       color : props.mode === 'dark'?'white':'black'
  
//   }

//  const [btntext,setbtntext] = useState("Enable Dark mode");
//   const [setstyle,SetMystyle] = useState( {
//     color : 'black',
//     backgroundColor:'white'
//   });

//   const handlesetstyle = () =>{
//     if(setstyle.color === 'black'){
//       SetMystyle({
//         color : 'white',
//         backgroundColor:'black'
//       })

//       setbtntext("Enable light mode")
//     }

//     else{
//       SetMystyle ({
//         color : 'black',
//         backgroundColor:'white'
//       })
//       setbtntext("Enable Dark mode")
//     }
//   }
//   return (
//     <div className='container'style={setstyle}>
//         <h1>About us </h1>
//       <div className="accordion accordion-flush" id="accordionFlushExample">
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//       <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed"style={setstyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//       <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" style={setstyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
//         Accordion Item #3
//       </button>
//     </h2>
//     <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
//       <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
//     </div>
//   </div>
// </div>
// {/* <div className='container my-3'>
// <button type="button" className="btn btn-primary my-3" onClick={handlesetstyle}>{btntext}</button>

// </div> */}
//     </div>
//   )
// }



import React from 'react';

export default function About(props) {
  const mystyle = {
    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
    padding: '20px',
    borderRadius: '5px'
  };

  return (
    <div className='container' style={mystyle}>
      <h1>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Our Mission
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Our mission is to provide a powerful and easy-to-use text utility tool that helps users manipulate and analyze their text efficiently. We aim to enhance productivity through a seamless and intuitive user experience.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Our Vision
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              We envision a world where everyone has access to robust text editing and analysis tools, enabling them to create, edit, and share content with ease. Our goal is to continuously innovate and improve our tool to meet the evolving needs of our users.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Our Values
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <ul>
                <li><strong>Innovation:</strong> We are committed to innovation and continuously improving our text utility tool.</li>
                <li><strong>User-Centric:</strong> Our users are at the heart of everything we do. We strive to provide an exceptional user experience.</li>
                <li><strong>Accessibility:</strong> We believe in making our tool accessible to everyone, regardless of their technical proficiency.</li>
                <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
