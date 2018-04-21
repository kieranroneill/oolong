import { assert, spy } from 'sinon';

// Interface.
import when from './when';

describe('interfaces/when', () => {
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
        when(title, scope.callback);

        assert.calledOnce(scope.callbackSpy);
    });
});
