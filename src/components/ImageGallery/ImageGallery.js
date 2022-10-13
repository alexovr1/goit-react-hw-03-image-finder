import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ items, handleLargeImage }) => {
    return (
        <ul className="gallery" >
            {items.length > 0 &&
                items.map(({ id, largeImageURL, webformatURL, tags }) => (
                    <li className="gallery-item" key={id} onClick={() => handleLargeImage(largeImageURL)}>
                        <ImageGalleryItem path={webformatURL} description={tags} />
                    </li>
                ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    handleLargeImage: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }).isRequired
    ),
};