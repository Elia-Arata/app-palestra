import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../../../../store/actions";
import { store } from "../../../../store/store";
import "./ListTile.css";

export function ListTile(props) {
    const navigate = useNavigate();
    const [showActions, showActionsState] = useState(false);

    return (
        <div
          className="list-tile"
          onMouseEnter={() => showActionsState(true)}
          onMouseLeave={() => showActionsState(false)}
        >
          <input type="checkbox"></input>
          <div className="content">
            <p className="name"> {props.name}</p>
            <p className="description">{props.description}</p>
          </div>
          {showActions && (
            <>
              <AiOutlineEdit
                fontSize={"24px"}
                color={"white"}
                opacity={0.65}
                cursor="pointer"
                onClick={() => navigate(`/detail/${props.id}`)}
              />
              <AiOutlineDelete
                onClick={() => store.dispatch(deleteApp(props.id))}
                opacity={0.8}
                fontSize={"24px"}
                color={"#ff4164"}
                cursor="pointer"
              />
            </>
          )}
        </div>
      );
    }