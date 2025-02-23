import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import "../Comments/Comments.scss"

function Comments(){
    const{id} = useParams();
    let [name, setName] = useState("");
    let  [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]); //to store fetched comments

    const API_URL="https://unit-3-project-c5faaab51857.herokuapp.com";
    const API_KEY="?api_key=03cdedfd-0163-4902-a24f-800377492629";

    useEffect(()=>{
        const fetchComments=async()=>{
            try{
                const response= await axios.get(`${API_URL}/photos/${id}/comments/${API_KEY}`);
                const comments=response.data;

const formattedComments = comments.map(comment=>({
    ...comment,
    date: new Date(comment.timestamp).toLocaleDateString("en-US")
}));

                //setCommentsList(response.data.reverse());
                setCommentsList(formattedComments.reverse());
            } catch (error){
                console.error("Error fetching comments:",error);
                alert("Failed to load comments");
            }
        };
        fetchComments();
    },[]);

    const handleChangeName=(event)=>setName(event.target.value);

    const handleChangeComment=(event)=>setComment(event.target.value);

    //Validation

    const isFormValid = () => name.trim()!=="" && comment.trim() !=="";


const handleSubmit=async (event) => {
    event.preventDefault();

    if(!isFormValid()){
        alert("Failed to submit comment, please fill all the fields");
        return;
    }
    try{
       // const newComment ={name , text:comment, date: new Date().toLocaleDateString("en-US")};
       const newComment ={name , comment};
       const response = await axios.post(`${API_URL}/photos/${id}/comments/${API_KEY}`,newComment);
       const commentWithDate={
        ...response.data,
        date: new Date(response.data.timestamp).toLocaleDateString("en-US")
       };
        


        setCommentsList((prevComments)=>[commentWithDate, ...prevComments]);
        setName("");
        setComment("");
    } catch(error) {
        console.error("Error submitting comment:",error);
        alert("Failed to submit comment, please try again.");
    }
};

return (
    <div className="comments">
    <form onSubmit={handleSubmit} className="comments_form">
        <label>
            Name
            <input
            type="text"
            name="name"
            onChange={handleChangeName}
            value={name}
            className="comment__input" required
            />
        </label>
        <label>
            Comment
            <textarea
            onChange={handleChangeComment}
            value={comment}
            className="comment__input" required
            />
        </label>
        <button type="submit">Submit</button>
    </form>
    <div className="comments__list">
        <h3>{commentsList.length} Comments</h3>
        <ul>
            {commentsList.map((c)=>(
                <li key={c.id}>
                    <strong>{c.name}</strong>{c.date} {c.comment}
                </li>
            ))}
        </ul>
    </div>
    </div>
);
}

export default Comments;