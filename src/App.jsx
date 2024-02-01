import { Route, Routes } from "react-router-dom"
import User from "./pages/User"
import Home from "./pages/Home"
import Counter from "./components/Counter"
import Form from "./pages/Form"
import ListPerson from "./pages/ListPerson"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user-profile" element={<User/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/list-person" element={<ListPerson/>}/>
      </Routes>
    </>
  )
}

export default App
