import Header from "./layout/Header"
import Body from "./layout/Body"
import { useState } from "react"

function App() {
  const [selectedItem,setSelectedItem] = useState('');
  const stateData = {selectedItem,setSelectedItem};

  return (
    <div>
      <Header stateData={stateData}/>
      <div className="bg-gray-200 rounded-xl m-8 p-4">
        <Body stateData={stateData}/>
      </div>
    </div>
  )
}

export default App