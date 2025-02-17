import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Footer from "./assets/components/footer/Footer.tsx/Footer";
import Navbar from "./assets/components/navbar/Navbar";
import ListaTemas from "./assets/components/temas/listatemas/ListaTemas";
import FormTema from "./assets/components/temas/formtema/FormTema";
import DeletarTema from "./assets/components/temas/deletartema/DeletarTema";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartema" element={<FormTema />} />
            <Route path="/editartema/:id" element={<FormTema />} />
            <Route path="/deletartema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
