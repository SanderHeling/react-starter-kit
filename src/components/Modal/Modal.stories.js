import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Modal from './Modal';

storiesOf('Modal', module).add(
    'with content',
    withInfo()(() => (
        <Modal>
            <h1>This is a modal</h1>
        </Modal>
    ))
);
