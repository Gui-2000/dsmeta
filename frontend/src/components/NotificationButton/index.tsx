import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props= {
      SaleId: number;
}

function handClick(id :number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
          .then(response => {
              console.log("SUCESSO")
          });
}

function NotificationButton({SaleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handClick(SaleId)}>
           <img src={icon} alt="Notificar" />
        </div>
    )
  }
  
  export default NotificationButton;