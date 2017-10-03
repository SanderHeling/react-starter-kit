// Throw console.errors (like prop validation) to Errors so the test fail.
const spy = jest.spyOn(console, 'error').mockImplementation(error => {
    throw new Error(error);
});

afterAll(() => {
    spy.mockRestore();
});
