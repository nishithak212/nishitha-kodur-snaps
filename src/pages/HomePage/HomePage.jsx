import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import Hero from "../../components/Hero/Hero";
import "../HomePage/HomePage.scss";

const HomePage = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tags, setTags] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  //Fetch photos
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos`);
        console.log(response.data);
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotos();
  }, []);

  //Fetch tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(`${API_URL}/tags`);
        setTags(response.data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
  };

  const toggleFilterDrawer = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <>
      <Header
        toggleFilterDrawer={toggleFilterDrawer}
        isFilterOpen={isFilterOpen}
      />
      {isFilterOpen && (
        <FilterDrawer
          selectedTag={selectedTag}
          onTagSelect={handleTagClick}
          isFilterOpen={isFilterOpen}
          tags={tags}
        />
      )}
      <Hero />
      <PhotoGallery
        photos={photos}
        selectedTag={selectedTag}
        isFilterOpen={isFilterOpen}
      />
    </>
  );
};

export default HomePage;
