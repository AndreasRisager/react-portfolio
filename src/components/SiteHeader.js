import Navigation from "./Navigation";
import "./SiteHeader.scss";

export default function SiteHeader() {
    return (
      <header className="SiteHeader">
         <Navigation />
         <div className="SiteHeader__content">
            <h1>Developing a better and brighter future.</h1>
            <h2>We create innovative digital experiences.</h2>
         </div>
      </header>
    );
}



