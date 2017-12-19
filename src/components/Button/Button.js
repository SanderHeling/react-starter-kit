import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classtr';

import styles from './Button.scss';

const Button = ({ className, ...other }) => (
    <div
        className={cs([styles.Button, className])}
        role="button"
        tabIndex={0}
        {...other}
    />
);

Button.propTypes = {
    className: PropTypes.string,
};

Button.defaultProps = {
    className: '',
};

export default Button;
