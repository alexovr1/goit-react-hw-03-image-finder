export const ImageGalleryItem = ({ path, description }) => {
    return <img className="gallery-item-image" src={path} alt={description} />
}