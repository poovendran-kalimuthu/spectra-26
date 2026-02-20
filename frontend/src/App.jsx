import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Results from "./pages/Results.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  )
}

export default App