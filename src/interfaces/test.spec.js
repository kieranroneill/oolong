import { assert, spy } from 'sinon';

// Interface.
import test from './test';

describe('interfaces/test', () => {
    const scope = {
        callbackSpy: null
    };
    const title = 'nameOfAFunction()';

    beforeEach(() => {
        scope.callbackSpy = spy();
    });

    afterEach(() => {
        scope.callbackSpy.restore();
    });

    it('should call the callback function', () => {
        test(title, scope.callback);

        assert.calledOnce(scope.callbackSpy);
    });
});
