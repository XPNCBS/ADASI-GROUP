import ContactItem from "./shared/ContactItem";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
interface NewsFooterProps {
  leftElement: React.ReactNode;
}
export default function NewsFooter({ leftElement }: NewsFooterProps) {
  return (
    <footer className="news-footer">
      <div className="news-footer-grid">
        <div>{leftElement}</div>

        <div className="news-footer-info">
          <ContactItem
            iconClassName="news-footer-icon"
            icon={<HiMiniBuildingOffice />}
          >
            <span>
              ADASI GROUP SDN BHD
              <br />
              Пн - Пт: 10:00 - 18:00
            </span>
          </ContactItem>
          <ContactItem iconClassName="news-footer-icon" icon={<FaPhone />}>
            <span>
              (+60) 3 9766 8630
              <br />
              Факс: (+60) 3 9766 8631
            </span>
          </ContactItem>
          <ContactItem iconClassName="news-footer-icon" icon={<MdPlace />}>
            <span>
              N-05-03, Pusat Perdagangan, Bandar Bukit Jalil,
              <br />
              Куала-Лумпур, Малайзия 57000
            </span>
          </ContactItem>
        </div>
      </div>
    </footer>
  );
}
