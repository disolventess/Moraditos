import Hero from "../components/hero/Hero";
import ProductInfo from "../components/site/ProductInfo";
import SiteFooter from "../components/site/SiteFooter";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero ctaHref="/registro" panelHref="/panel" />
        <ProductInfo />
      </main>

      <SiteFooter />
    </>
  );
}