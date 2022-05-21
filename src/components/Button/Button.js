import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ onClickButton }) {
    return (
        <>
            <button
                className={s.buttonLoad}
                type='button'
                onClick={onClickButton}
            >Load more</button>
        </>
    );
};
Button.propTypes = {
    onClickButton: PropTypes.func.isRequired,
}

export default Button;