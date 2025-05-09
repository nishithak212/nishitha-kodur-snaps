import { Link } from "react-router-dom";
import "../PhotoGallery/PhotoGallery.scss";
import PhotoCard from "../PhotoCard/PhotoCard";

const PhotoGallery = ({ photos, selectedTag, isFilterOpen }) => {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <div className={`photo-gallery ${isFilterOpen ? `filter-open` : ""}`}>
      {filteredPhotos.map((photo) => (
        <Link key={photo.id} to={`/photos/${photo.id}`}>
          <PhotoCard photo={photo} />
        </Link>
      ))}
    </div>
  );
};

export default PhotoGallery;
