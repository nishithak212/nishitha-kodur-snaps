import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Comments/Comments.scss";

function Comments() {
  const { id } = useParams();
  let [name, setName] = useState("");
  let [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]); //to store fetched comments
  const [errors, setErrors] = useState({ name: false, comment: false });

  const API_URL= import.meta.env.VITE_API_URL;
  // const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
  // const API_KEY = "?api_key=03cdedfd-0163-4902-a24f-800377492629";

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // const response = await axios.get(
        //   `${API_URL}/photos/${id}/comments/${API_KEY}`
           const response = await axios.get(
          `${API_URL}/photos/${id}/comments`
        );
        const comments = response.data;

        const formattedComments = comments.map((comment) => ({
          ...comment,
          date: new Date(comment.timestamp).toLocaleDateString("en-US"),
        }));

        setCommentsList(formattedComments.reverse());
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [id]);

  const handleChangeName = (event) => {
    setName(event.target.value);
    setErrors((prev) => ({ ...prev, name: event.target.value.trim() === "" }));
  };
  const handleChangeComment = (event) => {
    setComment(event.target.value);
    setErrors((prev) => ({
      ...prev,
      comment: event.target.value.trim() === "",
    }));
  };

  //Validation

  const isFormValid = () => name.trim() !== "" && comment.trim() !== "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      setErrors({ name: name.trim() === "", comment: comment.trim() === "" });
      return;
    }
    try {
      const newComment = { name, comment };
      // const response = await axios.post(
      //   `${API_URL}/photos/${id}/comments/${API_KEY}`,
      //   newComment
      // );
      const response = await axios.post(
        `${API_URL}/photos/${id}/comments`,
        newComment
      );
      const commentWithDate = {
        ...response.data,
        date: new Date(response.data.timestamp).toLocaleDateString("en-US"),
      };

      setCommentsList((prevComments) => [commentWithDate, ...prevComments]);
      setName("");
      setComment("");
      setErrors({ name: false, comment: false }); //to reset error state
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="comments">
      <form onSubmit={handleSubmit} className="comments__form">
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChangeName}
            value={name}
            className={`comments__input ${errors.name ? "error" : ""}`}
          />
        </label>
        <label>
          Comment
          <textarea
            onChange={handleChangeComment}
            value={comment}
            className={`comments__input comments__input--comment ${
              errors.name ? "error" : ""
            }`}
          />
        </label>
        <button type="submit" className="comments__submit">
          Submit
        </button>
      </form>
      <div className="comments__list">
        <h3 className="comments__title">{commentsList.length} Comments</h3>
        <ul className="comments__display">
          {commentsList.map((c) => (
            <li key={c.id} className="comments__item">
              <div className="comments__header">
                <p className="comments__display--name">{c.name}</p>
                <p classame="comments__display--date">{c.date}</p>
              </div>
              <p className="comments__display--commenttext">{c.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Comments;
