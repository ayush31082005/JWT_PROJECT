import './App.css'
import { Routes,Route, Link } from 'react-router-dom'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function App() {
  

  return (
    <>
      <Navbar />
      <main className="py-4">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
      </main>
      
    </>
  )
}

export default App
