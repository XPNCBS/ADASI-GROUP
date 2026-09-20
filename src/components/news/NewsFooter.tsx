import ContactItem from "./shared/ContactItem";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { useTranslation } from "react-i18next";
interface NewsFooterProps {
  leftElement?: React.ReactNode;
}
export default function NewsFooter({ leftElement }: NewsFooterProps) {
  const { t } = useTranslation();
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
              {t("contact.weekdays")}
            </span>
          </ContactItem>
          <ContactItem iconClassName="news-footer-icon" icon={<FaPhone />}>
            <span>
              (+60) 3 9766 8630
              <br />
              {t("contact.fax")} (+60) 3 9766 8631
            </span>
          </ContactItem>
          <ContactItem iconClassName="news-footer-icon" icon={<MdPlace />}>
            <span>{t("footer.address")}</span>
          </ContactItem>
        </div>
      </div>
    </footer>
  );
}
