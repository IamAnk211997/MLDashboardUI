import Header from "./layout/header"
import Body from "./layout/Body"

function App() {
  return (
    <div className="bg-gray-100 w-full h-[100vh]">
      <Header />
      <div className="bg-gray-200 rounded-xl m-8 p-4">
        <Body />
      </div>
    </div>
  )
}

export default App