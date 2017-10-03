import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const Button = ({ className, ...other }) => {
    const classNames = `${styles.Button} ${className}`;
    return <div className={classNames} role="button" tabIndex={0} {...other} />;
};

Button.propTypes = {
    className: PropTypes.string,
};

Button.defaultProps = {
    className: '',
};

export default Button;
