import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PhotoDetails.scss";
import Header from "../../components/Header/Header";
import like from "../../assets/Icons/Like_Outline.svg";
import Comments from "../../components/Comments/Comments";

const PhotoDetails = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  const API_KEY = "?api_key=03cdedfd-0163-4902-a24f-800377492629";

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos/${id}/${API_KEY}`);
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
          src={photo.photo}
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
            {new Date(photo.timestamp).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
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

export default PhotoDetails;
