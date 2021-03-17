import SiteHeader from "../components/SiteHeader";
import "./Case.scss";
import { Parallax } from 'react-parallax';

const insideStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    height: "100vh",
};

export default function Case() {
    return (
        <article className="case">
        
            <Parallax bgImage="../images/gallery1.jpg" bgImageStyle={{height: '120vh'}} strength={500} blur={{ min: -15, max: 13 }}>
                <div style={{ height: "100vh"}}><SiteHeader h1="Creating an immersive digital experience for all music lovers." h2="iplaymusic" casestudy /></div>
            </Parallax>

            

            <div style={{ height: "100vh" }}></div>

        </article>
    );
}
