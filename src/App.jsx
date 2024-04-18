import Navbar from "./components/Navbar"
import News from "./components/News"
import React, { useState } from "react"
const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <News category={category}/>
    </div>
  )
}

export default App
