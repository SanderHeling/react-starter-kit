import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

import styles from './Button.scss';

const Button = ({ className, ...other }) => (
    <div
        className={cc([styles.Button, className])}
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
