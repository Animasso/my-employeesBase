import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ListEmployee from "./components/ListEmployee"
import NewEmployee from "./components/NewEmployee"


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path="/add-new-employee" element={<NewEmployee />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App