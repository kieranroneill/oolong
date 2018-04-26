import { assert, SinonSpy, spy } from 'sinon';

// Interface.
import when from './when';

describe('interfaces/when', () => {
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
        when(title, scope.callbackSpy);

        assert.calledOnce(scope.callbackSpy);
    });
});
