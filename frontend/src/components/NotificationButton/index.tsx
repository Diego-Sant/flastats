import Notification from "../../assets/img/notification-icon.svg";
import "./styles.css";
import axios from "axios";
import { BASE_URL } from "../../utils/request";

type Props = {
  statsId: number;
};

function handleClick(id: number) {
  axios(`${BASE_URL}/stats/${id}/notification`).then((response) => {
    console.log("SUCESSO");
  });
}

function NotificationButton({ statsId }: Props) {
  return (
    <div className="flastats-red-btn" onClick={() => handleClick(statsId)}>
      <img className="bellnot" src={Notification} alt="Notificação" />
    </div>
  );
}

export default NotificationButton;
