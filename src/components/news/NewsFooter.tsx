import NewsButton from "./shared/NewsButton";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
export default function NewsFooter() {
  return (
    <footer className="news-footer">
      <div className="news-footer-grid">
        <div>
          
      
        </div>

        <div className="news-footer-info">
          <div className="news-footer-info-item items-center"> 
            <HiMiniBuildingOffice/>
             <span className="font-bold text-gray-600">Адрес:</span> ADASI GROUP SDN BHD / Пн - Пт: 10:00 - 18:00 /
            info@adasigroup.com
          </div>
          <div className="news-footer-info-item items-baseline">
            <FaPhone/>
            <span className="font-bold text-gray-600">  Адрес:</span> N-05-03, Pusat Perdagangan, Bandar Bukit Jalil,
            Куала-Лумпур, Малайзия 57000
          </div>
          <div className="news-footer-info-item items-center">
            <MdPlace/>
            <span className="font-bold text-gray-600 flex"> Тел.:</span> (+60) 3 9766 8630 / Факс: (+60) 3 9766 8631</div>
        </div>
      </div>
    </footer>
  );
}
