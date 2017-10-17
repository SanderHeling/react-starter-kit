import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

// Add padding to story
const PaddedDecorator = storyFn => (
    <div style={{ padding: '20px' }}>{storyFn()}</div>
);

storiesOf('Button', module)
    .addDecorator(PaddedDecorator)
    .add(
        'with content',
        withInfo()(() => <Button onClick={action('clicked')}>Button</Button>)
    )
    .add(
        'with custom class',
        withInfo()(() => (
            <Button onClick={action('clicked')} className="customClass">
                Button
            </Button>
        ))
    );
