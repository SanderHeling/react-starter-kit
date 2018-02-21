import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Button from './components/Button';
import Modal from './components/Modal';
import './index.scss';

const App = () => (
    <div>
        <h1>App</h1>
        <p>
            Is is time for <FontAwesomeIcon icon="coffee" /> yet?
        </p>
        <Button>Button</Button>
        <Modal>
            <h1>This is a modal</h1>
        </Modal>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
