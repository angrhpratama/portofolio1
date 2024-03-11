import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./contactMe"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contactMe" element={<Contact />} />
        {/* <Route path="/gambar" element={<Gambar />} /> */}
      </Routes>
    </>
  )
}

export default App
