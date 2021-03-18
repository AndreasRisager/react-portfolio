import Navigation from "../components/Navigation";
import "./Case.scss";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';


export default function Case() {
    return (
        <article className="case">
            <header className="caseHeader">
                <Navigation />
                <div className="caseHeader__content">
                    <h1 className="content__heading">iplaymusic</h1>
                    <h2 className="content__subheading">With iplaymusic, it's easy to find the right music for every moment</h2>
                </div>
            </header>

            <section className="caseIntroduction">
                <ParallaxBanner
                layers={[{image: '../images/gallery1.jpg', amount: 0.25}]}
                style={{height: '100vh'}}/>

                <h2>iplaymusic uses spotify's api to get all the artists and songs for this app</h2>

                <ParallaxBanner
                layers={[{image: '../images/gallery3.jpg', amount: 0.15}]}
                style={{height: '100vh'}}/>
            </section>

            <section>
                <h2>whether you’re partying or relaxing, the right music is always at your fingertips.</h2>
                <p>Seamlessly listen to music you love. Download the iplaymusic app on appstore.</p>
                <div className="grid">

                </div>
            </section>
            

            

            <div style={{ height: "100vh" }}></div>

        </article>
    );
}
