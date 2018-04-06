import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

import './polyfill';

import Button from './components/Button';
import Modal from './components/Modal';
import './index.scss';

fontawesome.library.add(solid);

const App = () => (
    <div>
        <h1>App</h1>
        <p>
            Is it time for <FontAwesomeIcon icon="coffee" /> yet?
        </p>
        <Button>Button</Button>
        <Modal>
            <h1>This is a modal</h1>
        </Modal>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
