import {useState, useEffect} from "react";
import axios from "axios";
import "../HomePage/HomePage.scss";
import Header from "../../components/Header/Header";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const API_URL="https://unit-3-project-c5faaab51857.herokuapp.com";
    const API_KEY="?api_key=03cdedfd-0163-4902-a24f-800377492629";

    useEffect(()=>{
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`${API_URL}/photos/${API_KEY}`);
                setPhotos(response.data);
            }
            catch(error) {
                console.error("Error fetching photos:", error);
            }
        };
        fetchPhotos();
    },[]);

    const handleTagClick = (tag) => {
        setSelectedTag((prevTag)=> (prevTag === tag? null : tag));
    };

    const toggleFilterDrawer = () => {
        setIsFilterOpen((prev) => !prev);
    };

    return(
        <>
        <Header toggleFilterDrawer={toggleFilterDrawer} isFilterOpen={isFilterOpen} />
        {isFilterOpen && <FilterDrawer selectedTag={selectedTag} onTagSelect={handleTagClick} isFilterOpen={isFilterOpen}/>}
        <Hero />
        <PhotoGallery photos={photos} selectedTag={selectedTag} isFilterOpen={isFilterOpen}/>
        </>
    );
};

export default HomePage;