import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectCarousel.css";
// import * as carouselStyles from './ProjectCarousel.module.css';
import { uuid } from 'uuidv4';

const ProjectCarousel = ({ details }) => {
    return (
        <div>
        <Carousel width="100%" >
            {details.photos.map(photo => {
                return (
                    <div key={uuid()} >
                        <img src={photo.url} alt={photo.legend}/>
                        <p className="legend">{photo.legend}</p>
                    </div>
                )
            })}
        </Carousel>
        </div>
    )
}

export default ProjectCarousel
