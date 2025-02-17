import "../PhotoGallery/PhotoGallery.scss";
import PhotoCard from "../PhotoCard/PhotoCard";

const PhotoGallery = ({ photos, selectedTag, isFilterOpen }) => {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <div className={`photo-gallery ${isFilterOpen ? `filter-open` : ""}`}>
      {filteredPhotos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGallery;
