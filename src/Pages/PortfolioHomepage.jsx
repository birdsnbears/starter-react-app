import Banner from "../Components/Banner";
import "./PortfolioHomepage.css";

function PortolioHomepage() {
  return (
    <div
      id="portfolio-homepage"
      className="
      mx-auto min-h-screen max-w-screen-xl font-sans
      px-6 pb-12
      md:px-12 md:pb-20
      lg:px-24 lg:pb-0"
    >
      <div className="lg:flex lg:justify-between lg:gap-4 lg:min-h-screen">
        <Banner />
        <div className="bg-black">woa</div>
        {/* <Content/> */}
      </div>
    </div>
  );
}

export default PortolioHomepage;
