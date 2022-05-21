import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        return (
            <div className={s.overlay} onClick={this.handleBackdropClick}>
                <div className={s.modal}>
                    <img src={this.props.refLargImage} alt="" />
                </div>
            </div>,
            modalRoot
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    refLargImage: PropTypes.string,
};