import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PhotoDetailsPage.scss";
import Header from "../../components/Header/Header";
import like from "../../assets/Icons/Like_Outline.svg";
import Comments from "../../components/Comments/Comments";
import { formatDate } from "../../utils/dateUtils";

const PhotoDetailsPage = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos/${id}`);
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo details:", error);
      }
    };
    fetchPhoto();
  }, [id]);

  if (!photo) return <p>Loading...</p>;

  return (
    <>
      <Header isPhotoPage />
      <div className="photo-details">
        <img
          src={`${API_URL}/${photo.photo}`}
          alt={photo.photoDescription}
          className="photo-details__image"
        />

        <div
          className="photo-
        details__tags"
        >
          {photo.tags.map((tag, index) => (
            <span key={index} className="photo-details__tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="photo-details__wrapper">
          <h3 className="photo-details__likes">
            <img src={like} alt="likeIcon-outline" /> {photo.likes} likes{" "}
          </h3>
          <h3 className="photo-details__timestamp">
            {formatDate(photo.timestamp)}
          </h3>
        </div>
        <h3 className="photo-details__photographer">
          Photo by {photo.photographer}
        </h3>
      </div>
      <Comments />
    </>
  );
};

export default PhotoDetailsPage;
