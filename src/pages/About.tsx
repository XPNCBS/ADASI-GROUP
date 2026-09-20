import AboutMainInfo from "../components/about/AboutInfoBlock";
import AboutCertificates from "../components/about/AboutCertificates";
import AboutLogistics from "../components/about/AboutLogistics";
import AboutManagement from "../components/about/AboutManagement";
import AboutProducts from "../components/about/AboutProducts";
import AboutStats from "../components/about/AboutStats";
import Title from "../components/shared/Title";

export default function About() {
  return (
    <div className="page">
      <Title
        title="ADASI Group — международный поставщик растительных масел, жиров и пищевых ингредиентов"
        text="ADASI Group специализируется на поставках растительных масел, жиров и пищевых ингредиентов для предприятий пищевой промышленности. Мы работаем напрямую с производителями в Малайзии и Индонезии, организуя поставки в Казахстан и Россию. Компания представлена в Малайзии, Казахстане и России."
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
