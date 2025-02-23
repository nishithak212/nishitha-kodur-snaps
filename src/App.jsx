import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.scss";;
import HomePage from './pages/HomePage/HomePage';
import PhotoDetails from './pages/PhotoDetails/PhotoDetails';
import Footer from "./components/Footer/Footer";


function App(){
  return(
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photo" element={<PhotoDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

// import { useState } from "react";
// import "./App.scss";
// import photosData from "./data/photos.json";
// import tagsData from "./data/tags.json";
// import Header from "./components/Header/Header";
// import FilterDrawer from "./components/FilterDrawer/FilterDrawer";
// import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
// import Hero from "./components/Hero/Hero";
// import Footer from "./components/Footer/Footer";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';


// function App() {
//   const [selectedTag, setSelectedTag] = useState(null);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   //Function to handle filter selection
//   const handleTagClick = (tag) => {
//     setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
//   };

//   //Function to toggle the filter drawer
//   const toggleFilterDrawer = () => {
//     setIsFilterOpen((prev) => !prev);
//   };

//   return (
//     <div className="app">
//       <BrowserRouter> 
//       </BrowserRouter>
//       <Header
//         toggleFilterDrawer={toggleFilterDrawer}
//         isFilterOpen={isFilterOpen}
//       />
//       {isFilterOpen && (
//         <FilterDrawer
//           selectedTag={selectedTag}
//           onTagSelect={handleTagClick}
//           tags={tagsData}
//           isFilterOpen={isFilterOpen}
//         />
//       )}
//       <Hero />
//       <PhotoGallery
//         photos={photosData}
//         selectedTag={selectedTag}
//         isFilterOpen={isFilterOpen}
//       />
//       <Footer />
//     </div>
//   );
// }

// export default App;
