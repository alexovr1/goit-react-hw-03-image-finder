import PropTypes from 'prop-types';

export const LoadMore = ({ onClick }) => {
    return <button type="button" onClick={onClick} className="button">Load more</button>
}

LoadMore.propTypes = {
    onClick: PropTypes.func.isRequired
}