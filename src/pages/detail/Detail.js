import { useRef, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addApp, updateApp } from "../../store/actions";
import { store } from "../../store/store";
import "./Detail.css";

export function Detail() {
    const { id } = useParams();
    const currentItem = useSelector((state) => state.appList).find(
      (app) => app.id === id
    );
  
    const nameRef = useRef();
    const descriptionRef = useRef();
    const navigate = useNavigate();
  
    const [errorMessage, errorMessageState] = useState("");
  
    const validateForm = ($event) => {
      $event.preventDefault();
  
      const name = nameRef.current.value;
      const description = descriptionRef.current.value;
  
      if (!name || !description) return buildErrorMessage();
  
      navigate(-1);
  
      const action = !!currentItem
        ? updateApp({
            ...currentItem,
            name,
            description,
          })
        : addApp({ name, description });
  
      store.dispatch(action);
    };
  
    const buildErrorMessage = () => {
      let message = "Missing required fields: ";
      const name = nameRef.current.value;
      const description = descriptionRef.current.value;
      if (!name) message += "Name";
      if (!name && !description) message += ",";
      if (!description) message += "Description";
  
      errorMessageState(message);
    };
  
    return (
      <div className="detail-page">
        <div className="header">
          <div className="back-button" onClick={() => navigate(-1)}>
            <IoChevronBackOutline fontSize={24} />
          </div>
          <h1 className="detail-title">{currentItem?.name ?? "Nuovo allenamento"}</h1>
        </div>
  
        <form className="page-body" onSubmit={validateForm}>
          <div className="input-wrapper">
            <input
              className="app-input"
              placeholder="Name"
              defaultValue={currentItem?.name}
              ref={nameRef}
            />
          </div>
          <div className="input-wrapper">
            <input
              className="app-input"
              placeholder="Description"
              defaultValue={currentItem?.description}
              ref={descriptionRef}
            />
          </div>
  
          {!!errorMessage && <p className="error-message">{errorMessage}</p>}
  
          <button className="save-button">Save</button>
        </form>
      </div>
    );
  }