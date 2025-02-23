import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom"
import axios from "axios";
import "./PhotoDetails.scss";
import Header from "../../components/Header/Header";
//import arrowIcon from "../../assets/Icons/Arrow.svg";


const PhotoDetails=()=>{
    const{id} = useParams();
    const [photo,setPhoto] = useState(null);


    const API_URL="https://unit-3-project-c5faaab51857.herokuapp.com";
    const API_KEY="?api_key=03cdedfd-0163-4902-a24f-800377492629";


    useEffect(()=>{
        const fetchPhoto = async () => {
            try{
                const response = await axios.get(`${API_URL}/photos/${id}/${API_KEY}`);
                setPhoto(response.data);
            } catch (error){
                console.error("Error fetching photo details:", error);
            }
        };
        fetchPhoto();
    },[id]);

    if(!photo) return <p>Loading...</p>;

   return( 
    <>
    <h1>This is Photo Details page</h1> 
    <Header isPhotoPage />
    <div className="photo-details">
        <img src={photo.photo} alt={photo.photoDescription} className="photo-details__image"/>
        <h2 className="photo-details__photographer">{photo.photographer}</h2>
        <div className="photo-details__tags">
            {photo.tags.map((tag,index)=>(
                <span key={index} className="photo-details__tag">{tag}</span>
            ))}
        </div>
        {/* <Link to="/" className="photo-details__return-to-home"><img src={arrowIcon} alt="arrow-icon"/>Home</Link> */}
    </div>
    </>
   
);
};

export default PhotoDetails;