import '../PhotoGallery/PhotoGallery.scss'
import PhotoCard from "../PhotoCard/PhotoCard";

const PhotoGallery = ({photos, selectedTag, onTagClick})=> {
    const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)):photos;
    console.log("Photos being rendered:", filteredPhotos);


return (
    <div className="photo-gallery">
        {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo}/>
        ) )}
    </div>
);

};

export default PhotoGallery;
