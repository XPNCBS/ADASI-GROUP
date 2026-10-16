import AboutMainInfo from "../components/about/AboutInfoBlock";
import AboutCertificates from "../components/about/AboutCertificates";
import AboutLogistics from "../components/about/AboutLogistics";
import AboutManagement from "../components/about/AboutManagement";
import AboutProducts from "../components/about/AboutProducts";
import AboutStats from "../components/about/AboutStats";
import Title from "../components/shared/Title";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="page about-page">
      <Title
        title={t("aboutPage.heroTitle")}
        text={t("aboutPage.heroText")}
      />
      <AboutMainInfo />
      <AboutStats />
      <AboutProducts />
      <AboutLogistics />
      <AboutCertificates />
      <AboutManagement />
    </div>
  );
}
