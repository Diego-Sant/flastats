import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../../assets/img/notification-icon.svg";
import "./styles.css";
import "../NotificationButton/styles.css";
import ptBR from "date-fns/locale/pt-BR";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Stats } from "../../models/stats";

function FlaCard() {
  const min = new Date(new Date().setDate(new Date().getDate() + 113));
  const max = new Date(new Date().setDate(new Date().getDate() + 1940));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [stats, setStats] = useState<Stats[]>([]);

  useEffect(() => {
    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = maxDate.toISOString().slice(0, 10);

    axios
      .get(`${BASE_URL}/stats?minDate=${dmin}&maxDate=${dmax}`)
      .then((response) => {
        setStats(response.data.content);
      });
  }, [minDate, maxDate]);

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
              <th className="show576">Contrato até</th>
              <th>Jogador</th>
              <th className="show992">Número</th>
              <th className="show992">Jogos</th>
              <th>Salário</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => {
              return (
                <tr key={stat.id}>
                  <td className="show992">{stat.id}</td>
                  <td className="show576">
                    {new Date(stat.date).toLocaleDateString()}
                  </td>
                  <td>{stat.playerName}</td>
                  <td className="show992">{stat.number}</td>
                  <td className="show992">{stat.games}</td>
                  <td>R$ {stat.salary.toFixed(3)}</td>
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FlaCard;
