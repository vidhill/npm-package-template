import { helloWorld } from './index';
describe(`test 'helloWorld()'`, () => {
    it('should be a defined function', () => {
        expect(helloWorld).not.toBeUndefined();
        expect(helloWorld).toBeType('function');
    });
});
