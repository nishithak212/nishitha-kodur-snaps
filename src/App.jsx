import {useState} from "react";
import './App.scss';
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import photosData from "./data/photos.json";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import tags from "./data/tags.json";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from "./components/Hero/Hero";




function App() {
  //console.log(photosData);
  const [selectedTag, setSelectedTag] = useState(null);

  //Function to update the selected tag

  const handleTagClick = (tag) => {
    setSelectedTag(tag===selectedTag ? null :tag);
  };

  // console.log("Photos:",photos);
  // console.log("Tags",tags);
  return (
    <div className="app">
      <h1>Snaps</h1>
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
