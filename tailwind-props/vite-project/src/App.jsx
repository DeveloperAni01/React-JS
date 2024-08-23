import Card from "./components/Card"

function App() {
  let obj = { 
    user: "Ani",
    password: "65741684186"
  }
  let arr = [21532489674]
  return (
    <>
   
      <h1 className="text-7xl text-white text-center my-10">Fine !!</h1>
     <div className="flex items-center justify-around ">
     <Card name="Anirban" btnText = "click me" object = {obj} myArr = {arr} />
     <Card name = "Ampita" btnText = "visit me" />
     <Card name = "Chacha" />
     <Card name = "Chacha" />
     
     </div>
    </>
  )
}

export default App
