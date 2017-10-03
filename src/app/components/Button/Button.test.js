import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

test('should render correctly', () => {
    const component = renderer.create(<Button>Text</Button>).toJSON();
    expect(component).toMatchSnapshot();
});
