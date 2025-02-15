import '../PhotoCard/PhotoCard.scss'

const PhotoCard = ({photo , onTagClick}) => {
    return(
    <div className="photo-card">
    <img src={photo.photo} alt={photo.photographer} className="photo-card_image" />
    <div className="photo-card__info">
        <h3 className="photo-card__photographer">{photo.photographer}</h3>
        <div className="photo-card__tags">
            {photo.tags.map((tag)=>(
                <span key={tag} className="photo-card__tag" onClick={() => onTagClick(tag)}
                >
                    {tag}
                </span>
            ))}
        </div>
    </div>
</div>
    );
};
export default PhotoCard;