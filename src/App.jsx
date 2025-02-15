import {useState} from "react";
import './App.scss';
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import photosData from "./data/photos.json";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
//import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from "./components/Hero/Hero";




function App() {
  const [selectedTag, setSelectedTag] = useState(null);

  //Function to update the selected tag

  const handleTagClick = (tag) => {
    setSelectedTag(tag===selectedTag ? null :tag);
  };

  return (
    <div className="app">
      <h1>Snaps</h1>
      {/* <Header /> */}
      <FilterDrawer selectedTag={selectedTag} onTagSelect={handleTagClick}/>
      <Hero />
      <PhotoGallery photos={photosData} selectedTag={selectedTag} onTagClick={handleTagClick}/>
      <Footer />
    </div>
  )

  // return (
  //   <>
  //   <Header />
  //   <Footer />
  //   </>
  // )
}

export default App
