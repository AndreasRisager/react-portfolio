import Navigation from "./Navigation";
import "./SiteHeader.scss";

const Styles = {
   position: "absolute",
   top: "0",
   left: "0",
   right: "0",
   bottom: "0",
};

export default function SiteHeader({ h1, h2, casestudy }) {
    return (
      <header className="SiteHeader" style={casestudy && Styles}>
         <Navigation />
         <div className="SiteHeader__content">
            <h1 style={{maxWidth: casestudy ? "800px" : ""}}>{h1}</h1>
            <h2>{h2}</h2>
         </div>
      </header>
    );
}



