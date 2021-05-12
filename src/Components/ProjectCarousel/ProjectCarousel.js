import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as carouselStyles from './ProjectCarousel.module.css';

const ProjectCarousel = ({ details }) => {
    return (
        <div>
        <Carousel width="90%">
            {details.photos.map(photo => {
                return (
                    <div className={carouselStyles.carouselContainer}>
                        <img src={photo.url} />
                        <p className="legend">{photo.legend}</p>
                    </div>
                )
            })}
        </Carousel>
        </div>
    )
}

export default ProjectCarousel
