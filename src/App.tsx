import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ListEmployee from "./components/ListEmployee"
import NewEmployee from "./components/NewEmployee"
import LoginAndRegister from "./components/LoginAndRegister"


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginAndRegister type="login" />} />
          <Route path="/register" element={<LoginAndRegister type="register" />} />
          <Route path="/listemployee" element={<ListEmployee />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path="/add-new-employee" element={<NewEmployee />} />
          <Route path="/update-employee/:id" element={<NewEmployee />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App