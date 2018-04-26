import { assert, match, SinonSpy, SinonStub, spy, stub } from 'sinon';

// Interface.
import { default as _describe } from './Describe';

// Utilities.
import Suite from '../Utilities/Suite';

describe('Interfaces/Describe', () => {
    const scope: { consoleLogSpy: SinonSpy, processExitStub: SinonStub, suite: Suite } = {
        consoleLogSpy: null,
        processExitStub: null,
        suite: null,
    };
    const title: string = '/path/to/test/file';

    beforeEach(() => {
        scope.consoleLogSpy = spy(console, 'log');
        scope.processExitStub = stub(process, 'exit');
        scope.suite = Suite.getInstance();
    });

    afterEach(() => {
        scope.consoleLogSpy.restore();
        scope.processExitStub.restore();
        scope.suite.reset();
    });

    it('should call the callback function', () => {
        const callbackSpy: SinonSpy = spy();

        _describe(title, callbackSpy);

        assert.calledOnce(callbackSpy);
    });

    it('should log the title in the console', () => {
        _describe(title, stub());

        assert.calledWith(scope.consoleLogSpy, match(title));
    });

    it('should not exit if it is an inner test', () => {
        scope.suite.success++;

        _describe(title, stub());

        assert.notCalled(scope.processExitStub);
    });

    it('should exit with code 1, if any tests fail', () => {
        _describe(title, () => scope.suite.fail++);

        assert.calledWith(scope.processExitStub, 1);
    });
});
