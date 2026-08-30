import './App.css'
function App() {

  return (
    <>    
          <h1>Assalamulaikum</h1>  
          {/* <Student name="Subida Badi" gpa='3.65'></Student>
          <Student name="Pati leader" ></Student> */}
          {/* <Person></Person> 
          <Gadgets></Gadgets>        */}
          <Developer language ='TypeScript' exprience = '3 years'></Developer>
          <Developer language ='Python' exprience = '13 years'></Developer>
    </>
  )
}

function Developer(props){
  console.log(props);
  return(
    <div className="student">
      <h4>Programming Language: {props.language} </h4>
      <p>Years of Exprience : {props.exprience}</p>
    </div>
  )
}


function Student(props){
  console.log('Inside the student component', props);
  console.log(props.name);
  const studentStyle = {
    border: '2px solid red',
    margin: '5px',
    borderRadius: '5px'
  }
  return (
    <div style={{ border: '2px solid red',
    margin: '15px',
    borderRadius: '5px'}}>
      <h3>Name:{props.name} </h3>
      <p>Grade: </p>
    </div>
  )
}


// function Person(){
//   return <p>I'm Back.</p>
// }
// function Gadgets(){
//   const food = "Chocolate"
//   return (
//     <>
//     <p>I'm Likhon</p>
//     <p>I'm {10 + 10} years old</p>
//     <p>I read in Diploma in Engineering</p>
//     <p>Favourite Food {food}</p>
//     </>
//   )
// }

export default App
