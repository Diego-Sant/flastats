import Notification from "../../assets/img/notification-icon.svg";
import "./styles.css";

function NotificationButton() {
  return (
    <div className="flastats-red-btn">
      <img className="bellnot" src={Notification} alt="Notificação" />
    </div>
  );
}

export default NotificationButton;
