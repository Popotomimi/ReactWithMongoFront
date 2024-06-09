// CSS
import './App.css';
import 'animate.css';

// Axios
import axios from "axios";

// Toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"

// Hooks
import { useState, useEffect } from 'react';

// Navegação do site
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Paginas
import Home from "./pages/Home";
import About from "./pages/About";

// Componentes
import Edit from "./components/Edit";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8800/person');
      setUsers(response.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={ <Home users={users}/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/edit" element={ <Edit users={users} /> } />
            <Route path="/form" element={ <Form/> } />
          </Routes>
          <ToastContainer autoClose={4000} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
