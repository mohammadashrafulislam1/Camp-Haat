import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <Carousel>
                <div>
                <img src="https://i.postimg.cc/Px43Pbb2/img3.jpg" className="h-full w-full"/>
                <div className="legend">
                    <p>Influence your kid's to grow their skills.</p>
                </div>
                </div>
                <div>
                <img src="https://i.postimg.cc/76yjWMnN/pexels-pixabay-159579.jpg" className="h-full w-full"/>
                <div className="legend">
                    <p>Camp Haat is the best place to grow drawing skill.</p>
                </div>  
                </div>
                <div>
                <img src="https://i.postimg.cc/RZkb8ZVQ/img1.jpg" className="h-full w-full"/>
                <div className="legend">
                    <p>We are committed to make them skillful.</p>
                </div>    
                </div>
               
            </Carousel>
    );
};

export default Banner;