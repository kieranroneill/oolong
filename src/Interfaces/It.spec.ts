import { expect } from 'chai';
import { assert, match, SinonSpy, spy, stub } from 'sinon';

// Interface.
import { default as _it } from './It';

// Utilities.
import Suite from '../Utilities/Suite';

describe('Interfaces/It', () => {
    const scope: { consoleLogSpy: SinonSpy, suite: Suite } = {
        consoleLogSpy: null,
        suite: null,
    };
    const description: string = 'should do something meaningful';

    beforeEach(() => {
        scope.consoleLogSpy = spy(console, 'log');
        scope.suite = Suite.getInstance();
    });

    afterEach(() => {
        scope.consoleLogSpy.restore();
        scope.suite.reset();
    });

    it('should call the callback function', () => {
        const callbackSpy: SinonSpy = spy();

        _it(description, callbackSpy);

        assert.calledOnce(callbackSpy);
    });

    it('should pass an `OK` and the description if the test passed', () => {
        expect(scope.suite.success).to.be.equal(0);

        _it(description, stub());

        assert.calledWith(scope.consoleLogSpy, match('OK'));
        assert.calledWith(scope.consoleLogSpy, match(description));

        expect(scope.suite.success).to.be.equal(1);
    });

    it('should pass an `FAIL` and the description if the test failed', () => {
        expect(scope.suite.fail).to.be.equal(0);

        _it(description, () => {
            throw Error('An error is thrown... catch me!');
        });

        assert.calledWith(scope.consoleLogSpy, match('FAIL'));
        assert.calledWith(scope.consoleLogSpy, match(description));

        expect(scope.suite.fail).to.be.equal(1);
    });
});
