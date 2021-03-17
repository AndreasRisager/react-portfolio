import Navigation from "./Navigation";
import "./SiteHeader.scss";

export default function SiteHeader({ h1, h2, casestudy }) {
    return (
      <header className="SiteHeader">
         <Navigation />
         <div className="SiteHeader__content">
            <h1 style={{maxWidth: casestudy ? "800px" : ""}}>{h1}</h1>
            <h2>{h2}</h2>
         </div>
      </header>
    );
}



