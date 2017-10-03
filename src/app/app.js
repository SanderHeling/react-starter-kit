import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

const App = () => (
    <div>
        <h1>App</h1>
        <Button>Button</Button>
        <Modal>
            <h1>This is a modal</h1>
        </Modal>
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
