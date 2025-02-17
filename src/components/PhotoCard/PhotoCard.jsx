import "../PhotoCard/PhotoCard.scss";

const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <div className="photo-card__image-wrapper">
        <img
          src={photo.photo}
          alt={photo.photographer}
          className="photo-card__image"
        />
        <div className="photo-card__photographer">{photo.photographer}</div>
      </div>
      <div className="photo-card__tags">
        {photo.tags.map((tag, index) => (
          <span key={index} className="photo-card__tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default PhotoCard;
