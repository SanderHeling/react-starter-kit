import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

describe('<Modal />', () => {
    let props;
    let modalComponent;

    const modal = () => {
        if (!modalComponent) {
            modalComponent = shallow(
                <Modal {...props}>
                    <h1>Test Modal</h1>
                </Modal>
            );
        }
        return modalComponent;
    };

    beforeEach(() => {
        props = Modal.defaultProps;
        modalComponent = undefined;
    });

    it('should render nothing by default', () => {
        // This test is not yet functional. First we need Portal's to
        // be supported by enzyme
        const divs = modal().find('div');
        expect(divs.length).toEqual(0);
    });
});
