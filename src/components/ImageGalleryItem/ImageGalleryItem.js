import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ path, description }) => {
    return <img className="gallery-item-image" src={path} alt={description} />
}

ImageGalleryItem.propType = {
    path: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}