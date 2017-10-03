import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.scss';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        const { children, className, ...other } = this.props;
        const classNames = `${styles.Modal} ${className}`;
        return ReactDOM.createPortal(
            <div className={classNames} role="button" tabIndex={0} {...other}>
                <div className={styles.Dialog}>{children}</div>
            </div>,
            this.el
        );
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Modal.defaultProps = {
    className: '',
};

export default Modal;
