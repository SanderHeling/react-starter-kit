import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme for React 16
Enzyme.configure({ adapter: new Adapter() });

// Throw console.errors (like prop validation) to Errors so the test fail.
const spy = jest.spyOn(console, 'error').mockImplementation(error => {
    throw new Error(error);
});

afterAll(() => {
    spy.mockRestore();
});
