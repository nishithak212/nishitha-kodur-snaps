import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import photos from "./data/photos.json";
import tags from "./data/tags.json";

function App() {

  console.log("Photos:",photos);
  console.log("Tags",tags);
  return (
    <>
    <Header />
    <Footer />
    </>
  )
}

export default App
