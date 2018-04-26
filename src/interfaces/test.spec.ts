import { assert, SinonSpy, spy } from 'sinon';

// Interface.
import test from './test';

describe('interfaces/test', () => {
    const scope: { callbackSpy: SinonSpy } = {
        callbackSpy: null,
    };
    const title: string = 'nameOfAFunction()';

    beforeEach(() => {
        scope.callbackSpy = spy();
    });

    afterEach(() => {
        scope.callbackSpy = null;
    });

    it('should call the callback function', () => {
        test(title, scope.callbackSpy);

        assert.calledOnce(scope.callbackSpy);
    });
});
