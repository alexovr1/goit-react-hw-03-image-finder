import { Component } from "react"
import { createPortal } from "react-dom"
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal_root')

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onEscapeClose);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscapeClose);
    }

    onBackdropClose = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    onEscapeClose = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    render() {
        const { children } = this.props;

        return createPortal(
            (<div className="overlay" onClick={this.onBackdropClose}>
                <div className="modal">
                    {children}
                </div >
            </div >),
            modalRoot)
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
};