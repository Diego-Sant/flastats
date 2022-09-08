import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../../assets/img/notification-icon.svg";
import "./styles.css";
import "../NotificationButton/styles.css";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

function FlaCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 1346));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return (
    <div className="flastats-card">
      <h2 className="flastats-sales-title">Estatísticas</h2>
      <div>
        <div className="flastats-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="flastats-form-control"
            dateFormat="dd/MM/yyyy"
            locale={ptBR}
          />
        </div>
        <div className="flastats-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="flastats-form-control"
            dateFormat="dd/MM/yyyy"
            locale={ptBR}
          />
        </div>
      </div>

      <div>
        <table className="flastats-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">No time desde</th>
              <th className="show576">Contrato até</th>
              <th>Jogador</th>
              <th className="show992">Número</th>
              <th>Salário</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#564</td>
              <td className="show576">28/01/2020</td>
              <td className="show576">31/12/2024</td>
              <td>Gabriel B.</td>
              <td className="show992">9</td>
              <td>R$ 1.677,840</td>
              <td>
                <div className="flastats-red-btn-container">
                  <div className="flastats-red-btn">
                    <img
                      className="bellnot"
                      src={NotificationButton}
                      alt="Notificar"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FlaCard;
