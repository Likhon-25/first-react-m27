import './App.css'
function App() {

  return (
    <>    
          <h1>Assalamulaikum</h1>  
          <Student></Student>
          <Student></Student>
          {/* <Person></Person> 
          <Gadgets></Gadgets>        */}

    </>
  )
}
function Student(){
  const studentStyle = {
    border: '2px solid red',
    margin: '5px',
    borderRadius: '5px'
  }
  return (
    <div style={{ border: '2px solid red',
    margin: '15px',
    borderRadius: '5px'}}>
      <h3>Name: </h3>
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
