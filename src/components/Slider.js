import "./Slider.scss";
import Carousel from 'react-grid-carousel';

function customArrow() {
   return (
      <button className="next-slide">
         <div className="arrow">
            <span className="arrow-line"></span>
            <span className="arrow-head"></span>
            <span className="arrow-line2"></span>
            <span className="arrow-head2"></span>
         </div>
      </button>
   )
}

function MyDot({ isActive }) {
   return (
      <span style={{
         display: 'inline-block',
         height: '3px',
         maxWidth: '100px',
         width: '6vw',
         background: isActive ? '#FFF' : '#555'
      }}></span>
   )
} 

export default function Slider() {
   return (
      <Carousel cols={1} rows={1} gap={0} arrowLeft={" "} arrowRight={customArrow} showDots={true} dot={MyDot} mobileBreakpoint={500} autoplay={5000} loop>
         <Carousel.Item>
            <div className="slide">
               <img src="./images/gallery1.jpg" alt="" />
               <div className="slide__content">
                  <p>website</p>
                  <h2>Creating an immersive digital experience for all music lovers.</h2>
                  <figure className="slide__contentLogo">
                     <img src="./images/iplaymusic.png" alt="" />
                  </figure>
               </div>
            </div>
         </Carousel.Item>
         <Carousel.Item>
            <div className="slide">
               <img src="./images/gallery2.jpg" alt="" />
               <div className="slide__content">
                  <p>website</p>
                  <h2>Developing a new digital platform for exclusive real-estate in Hawaii.</h2>
                  <figure className="slide__contentLogo">
                     <img src="./images/iplaymusic.png" alt="" />
                  </figure>
               </div>
            </div>
         </Carousel.Item>
         <Carousel.Item>
            <div className="slide">
               <img src="./images/gallery3.jpg" alt="" />
               <div className="slide__content">
                  <p>website</p>
                  <h2>Designing a bold and dynamic online experience for the social media group.</h2>
                  <figure className="slide__contentLogo">
                     <img src="./images/iplaymusic.png" alt="" />
                  </figure>
               </div>
            </div>
         </Carousel.Item>
      </Carousel>
   );
}

// export default function Slider() {
//     return (
//       <>
//       <div className="slider-container">
//          <div className="slides">
//             <div className="slide">
//                <img src="./images/mountain.jpg" alt=""/>
//                <div className="slide__content">
//                   <p>website</p>
//                   <h2>Creating an immersive digital experience for the real-estate company.</h2>
//                   <figure className="slide__contentLogo">
//                      <img src="./images/iplaymusic.png" alt=""/>
//                   </figure>
//                </div>
//             </div>

//             <div className="slide">
//                <img src="./images/mountain.jpg" alt=""/>
//                <div className="slide__content">
//                   <p>website</p>
//                   <h2>Creating an immersive digital experience for the real-estate company.</h2>
//                   <figure className="slide__contentLogo">
//                      <img src="./images/iplaymusic.png" alt=""/>
//                   </figure>
//                </div>
//             </div>

//             <div className="slide">
//                <img src="./images/mountain.jpg" alt=""/>
//                <div className="slide__content">
//                   <p>website</p>
//                   <h2>Creating an immersive digital experience for the real-estate company.</h2>
//                   <figure className="slide__contentLogo">
//                      <img src="./images/iplaymusic.png" alt=""/>
//                   </figure>
//                </div>
//             </div>
//          </div>

//          <button className="next-slide">
//             <div className="arrow">
//                <span className="arrow-line"></span>
//                <span className="arrow-head"></span>
//                <span className="arrow-line2"></span>
//                <span className="arrow-head2"></span>
//             </div>
//          </button>
//       </div>
//       </>
//     );
// }