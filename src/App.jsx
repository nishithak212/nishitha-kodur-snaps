import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import PhotoDetailsPage from "./pages/PhotoDetailsPage/PhotoDetailsPage";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react"; //
import axios from 'axios'; //

function App() {

  //test local server on port 8080

  const API_URL="http://localhost:8080/";

  useEffect(() => {
    const getRequest = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        const result = response.data;
        console.log(result);
      } catch (error) {
        console.error("Error sending request to local server API:", error);
      }
    };
    getRequest();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos/:id" element={<PhotoDetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
