import { IoAdd } from "react-icons/io5";
import "./FabButton.css";

export function FabButton(props) {
    return (
      <div className="fab-button">
        <IoAdd fontSize={32} color={"white"} onClick={props.onPress} />
      </div>
    );
  }