import {useState} from "react";
import './App.scss';
import photosData from "./data/photos.json";
import tagsData from "./data/tags.json";
import Header from "./components/Header/Header";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Hero from "./components/Hero/Hero";
import Footer from './components/Footer/Footer';

function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  //Function to handle filter selection
  const handleTagClick = (tag) => {
    setSelectedTag((prevTag) => (prevTag===tag ? null :tag));
  };

  //Function to toggle the filter drawer
  const toggleFilterDrawer = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <Header toggleFilterDrawer={toggleFilterDrawer} isFilterOpen={isFilterOpen} />
      {isFilterOpen && (<FilterDrawer selectedTag={selectedTag} onTagSelect={handleTagClick} tags={tagsData}/>)}
      {/* <FilterDrawer selectedTag={selectedTag} onTagSelect={handleTagClick} isFilterOpen={isFilterOpen} toggleFilterDrawer={toggleFilterDrawer} tags={tagsData}/> */}
      <Hero />
      <PhotoGallery photos={photosData} selectedTag={selectedTag}/>
      <Footer />
    </div>
  );
}

export default App
