import { assert, match, SinonSpy, spy, stub } from 'sinon';

// Interface.
import { default as _test } from './Test';

describe('Interfaces/Test', () => {
    const scope: { consoleLogSpy: SinonSpy } = {
        consoleLogSpy: null,
    };
    const title: string = 'nameOfAFunction()';

    beforeEach(() => {
        scope.consoleLogSpy = stub(console, 'log');
    });

    afterEach(() => {
        scope.consoleLogSpy.restore();
    });

    it('should call the callback function', () => {
        const callbackSpy: SinonSpy = spy();

        _test(title, callbackSpy);

        assert.calledOnce(callbackSpy);
    });

    it('should log the title in the console', () => {
        _test(title, stub());

        assert.calledWith(scope.consoleLogSpy, match(`=> ${title}`));
    });
});
